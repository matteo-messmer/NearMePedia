import { Container } from "unstated";

export default class POIsContainer extends Container {
	
	state = {
		savedLocations: [],
		nearLocations: null, 
		error: null,
		loading: false,
	};
  
	getPOIsFromApiAsync = async (lat, lon) => {
		await this.setState({ loading: true });
		
		let url = "https://en.wikipedia.org/w/api.php"; 

		let params = {
			action: "query",
			list: "geosearch",
			gscoord: lat +  "|" + lon,
			gsradius: "10000",
			gslimit: "10",
			format: "json"
		};
				
		url = url + "?origin=*";
		Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
 
		try {
			const nearLocations = (await fetch(url).then(r => r.json())).query.geosearch;
			await this.setState({ nearLocations, loading: false });
		} catch(error) {
			alert(error);
			await this.setState({ error, loading: false });
		}
	}
	
	clear = () => {
		this.setState({ pois: [] });
	};

	saveLocation = (coords, name) => {
		this.setState(state => ({savedLocations: [...state.savedLocations, {coords, name}]}));
	}
}
