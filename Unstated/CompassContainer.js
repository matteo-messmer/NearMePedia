import { Container } from "unstated";
import { Magnetometer } from 'expo-sensors';

export default class CompassContainer extends Container {
	
  state = { isReady: false, v: null, bearing: null, angle: null };

  setupMagnetometer = async () => {
    Magnetometer.addListener(v => {
		if(this.state.bearing) {
      let theta = "0rad";
      const pi = Math.PI;

      let { x, y, z } = v;
      theta = Math.atan(-x / y);
      if (-x > 0 && y > 0) {
        // nothing
      } else if (y > 0) {
        theta += pi;
      } else {
        theta += pi * 2;
      }

      let angle = this.state.bearing + (theta * (180 / pi) - 90);
      if (angle >= 360) {
        angle = angle - 360;
      } else if (angle < 0) {
        angle = angle + 360;
      }
      this.setState({ angle: angle });
		}
    });
  };

  bearing = (lat1, lat2, lon1, lon2) => {
    Number.prototype.toRad = function() {
      return (this * Math.PI) / 180;
    };
    var a = Math.sin(lon2.toRad() - lon1.toRad()) * Math.cos(lat2.toRad());
    var b =
      Math.cos(lat1.toRad()) * Math.sin(lat2.toRad()) -
      Math.sin(lat1.toRad()) *
        Math.cos(lat2.toRad()) *
        Math.cos(lon2.toRad() - lon1.toRad());

    var bearing = (Math.atan2(a, b) * 180) / Math.PI;

    this.setState({ bearing, isReady:true });
  };

}
