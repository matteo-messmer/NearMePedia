import React from 'react';
import { View, ImageBackground, Image, Text, } from 'react-native';
import { Magnetometer } from 'expo-sensors';

export default class Compass extends React.Component {

  state = {

    isReady: false,
    v: null,

  }

  _setupMagnetometerAsync = async () => {

    Magnetometer.addListener((v) => {
      this.setState({ v });
    });

  }
  componentDidMount() {
    this._setupMagnetometerAsync();
  }


  render() {
    let theta = "0rad";
    if (this.state.v) {
      let { x, y, z } = this.state.v;
      theta = Math.atan(-x / y);
      if (-x > 0 && y > 0) {

      }
      else if (y > 0) {
        theta += Math.PI;

      }
      else {
        theta += Math.PI * 2;
      }
    }
    return (
      <View>

        <ImageBackground source={require("./CompassFace.png")} style={{
          height: 120,
          width: 120,
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Image source={require("./CompassNeedle.png")}
            style={{
              height: 100,
              width: 100,
              opacity: 0.65,
              transform: [{ rotate: theta + 'rad' }]
            }}></Image>
        </ImageBackground>
        
      </View>
    )
  }

}

//<Text>{JSON.stringify(theta)}</Text> 
//(this.state.v)