import React, { Component } from 'react';
import { Container } from "unstated";

export default class GeolocationContainer extends Container {
	
    state = {
      ready: false,
      where: { lat: null, lon: null },
      error: null,
    }
	
  initGeolocation = () => {

    let geoOptions = {
      enableHighAccurancy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24,
    };

    this.setState({ ready: false, error: null }),
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)
  }


  geoSuccess = (position) => {


    var numLat = position.coords.latitude;
    var numLon = position.coords.longitude;
    
	  //console.log(position.coords.latitude);
    //console.log(position.coords.longitude);

    numLat = numLat.toFixed(0);
    numLon = numLon.toFixed(0);

    //console.log(numLat);
    //console.log(numLon);

    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lon: position.coords.longitude }
    })

  }

  geoFailure = (err) => {
    this.setState({ error: err.message });
  }
}


/*

        <View>
          {!this.state.ready && (
            <Text> Using Geolocation</Text>
          )}
          {this.state.error && (
            <Text>{this.state.error}</Text>
          )}
          {this.state.ready && (
            <Text>
              Latitude: {this.state.where.lat}
              Longitude: {this.state.where.lon}
            </Text>

          )}

        </View>
		
		*/
