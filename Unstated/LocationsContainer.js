import { Container } from "unstated";
import * as Location from 'expo-location';

export default class LocationsContainer extends Container {
	
	state = {
		savedLocations: [
			{
				coords: {
					latitude: 46.5024218,
					longitude: 11.3591007
				},
				city: ""
			},
			{
				coords: {
					latitude: 40.7128,
					longitude: -74.0059
				},
				city: ""
			},
						{
				coords: {
					latitude: 48.8589507,
					longitude: 2.2770205
				},
				city: ""
			},			{
				coords: {
					latitude: 52.5069704,
					longitude: 13.2846505
				},
				city: ""
			},			{
				coords: {
					latitude: -33.8678500,
					longitude: 151.2073200
				},
				city: ""
			}
		],
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
}
