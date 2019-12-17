import { Container } from "unstated";
import * as Location from 'expo-location';
import {  AsyncStorage  } from 'react-native';
import { PersistContainer } from 'unstated-persist';

export default class LocationsContainer extends PersistContainer {
	
	state = {
		newLocation: {
			city: ""
		},
		savedLocations: [],
		loaded: false,
	};
	
	// coords to city name
	reverseGeocodeLocations = async () => {
		let locations = this.state.savedLocations;
		for(let i = 0; i < locations.length; i++) {
				let geo = await Location.reverseGeocodeAsync(locations[i].coords);

				locations[i].city = geo[0].city;			
		}
		this.setState({loaded: true, savedLocations:locations});
	};
	
	setNewLocation = (city) => {
		this.setState({newLocation:{city:city}});
	}
	
	saveLocation = async () => {
		try {
			let location = await Location.geocodeAsync(this.state.newLocation.city);
			
			let savedLocations = this.state.savedLocations;
			savedLocations.push({
				city: this.state.newLocation.city, 
				coords: {
					latitude: location[0].latitude,
					longitude: location[0].longitude
				}
			});
			
			this.setState({ savedLocations });
		} catch {
			alert("Location not found");
		}
	}
	persist = {
		key: 'locations',
		version: 1,
		storage: AsyncStorage,
	  };
}
