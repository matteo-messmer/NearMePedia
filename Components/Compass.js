import React, {Component } from "react";
import { View, Text } from "react-native";
import Svg, { G, Circle, Line, Text as SvgText } from "react-native-svg";
import { Magnetometer } from "expo-sensors";
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';

const CompassFace = ({ width, height }) => (
  <G>
    <Circle cx={width / 2} cy={height / 2} r={width / 2} fill="black" />
		<SvgText fill="white" fontSize="15" x={(width/2) - 6} y={20}>N</SvgText>
      <SvgText fill="white" fontSize="15" x={(width/2) - 6} y={height - 10}>S</SvgText>
      <SvgText fill="white" fontSize="15" x={10} y={(height/2) + 7}>W</SvgText>
      <SvgText fill="white" fontSize="15" x={width - 15} y={(height/2) + 7}>E</SvgText>
  </G>
);

const Needle = ({ size }) => (
  <Line
    x1={size / 2}
    y1={0}
    x2={size / 2}
    y2={size}
    stroke="red"
    strokeWidth="3"
  />
);

const SvgCompass = ({ size, angle }) => (
  <Svg height={size} width={size}>
    <CompassFace width={size} height={size} />
    <G rotation={angle} origin={`${size / 2}, ${size / 2}`}>
      <Needle size={size} />
    </G>
    <Circle r="4" cx={size / 2} cy={size / 2} fill="white" />
  </Svg>
);

export default class Compass extends Component {
	
  state = { isReady: false, v: null, bearing: null, angle: null };
  setup = async(lat1, lat2, lon1, lon2) => {
	  this.bearing(lat1,lat2, lon1, lon2).then(() => {
	  this.setupMagnetometer();
	  });
  }
  setupMagnetometer = async () => {
    Magnetometer.addListener(v => {
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
    });
  };

  bearing = async (lat1, lat2, lon1, lon2) => {
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

    await this.setState({ bearing, isReady:true });
  }

 render() {
	 return (
		<Subscribe to={[PositionContainer]}>
			{
				( position) => {
					if(!this.state.isReady) {
						if(position.state.geoLocation != null) {
							this.setup(position.state.geoLocation.lat,this.props.coords.lat, position.state.geoLocation.lon, this.props.coords.lon);
						}
						return (
							<View />
						);
					} else {
						return (
							<View>
								<SvgCompass size={this.props.size} angle={this.state.angle} />
							</View>
						);
					}
				}
			}
		</Subscribe>
    );
 }
}