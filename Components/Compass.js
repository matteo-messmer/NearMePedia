import React from "react";
import { View, Text } from "react-native";
import Svg, { G, Circle, Line, Text as SvgText } from "react-native-svg";
import { Magnetometer } from "expo-sensors";
import CompassContainer from '../Unstated/CompassContainer';
import GPSContainer from '../Unstated/GPSContainer';
import { Subscribe } from 'unstated';

const CompassFace = ({ width, height }) => (
  <G>
    <Circle cx={width / 2} cy={height / 2} r={width / 2} fill="black" />
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

export default class Compass extends React.Component {
  render() {
    return (
		<Subscribe to={[CompassContainer,GPSContainer]}>
			{
				(compass,gps) => {
					gps.geoLocate();
					if(!compass.state.isReady) {
						compass.bearing(gps.state.latitude,this.props.coords.lat, gps.state.longitude, this.props.coords.lon);
						compass.setupMagnetometer();
						return (
							<View />
						);
					} else {
						return (
							<View>
								<SvgCompass size={this.props.size} angle={compass.state.angle} />
								<Text>{compass.state.angle}</Text>
							</View>
						);
					}
				}
			}
		</Subscribe>
    );
  }
}
