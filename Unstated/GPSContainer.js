import { Container } from "unstated";

export default class GPSContainer extends Container {
	
    state = {
		latitude:0, 
		longitude:0,
		loading: false,
    };

	geoLocate = () => {	
		this.setState({loading: true}, () =>{
			navigator.geolocation.getCurrentPosition(
				position => {
					this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude, loading:false });
				},
				error => Alert.alert(error.message),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
			);
		});
	}
}
