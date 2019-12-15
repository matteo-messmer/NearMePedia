import React, { Component } from 'react';
import { Container } from "unstated";

export default class PositionContainer extends Container {
	
    state = {
		latitude:0, 
		longitude:0,
		location : '',
    };

	geoLocate = async (callback) => {	
		await navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
				callback();
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
		}
	
	setCoordinates = async (coords) => {
		await this.setState({	latitude:coords.latitude, longitude:coords.longitude});
	}
	
	distance = (latitude, longitude) => {
		if ((latitude == this.state.latitude) && (longitude== this.state.longitude)) {
			return 0;
		}
		else {
			const radlat1 = Math.PI * latitude/180;
			const radlat2 = Math.PI * this.state.latitude/180;
			const theta = longitude-this.state.longitude;
			const radtheta = Math.PI * theta/180;
			let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			dist = dist * 1.609344;
			
			return dist;
		}
	}
}
