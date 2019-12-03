import { Container } from "unstated";

export default class POIsContainer extends Container {
	
	state = {
		pois: []
	};
  
	getPOIsFromApiAsync = (lat, lon) => {
		let url = "https://en.wikipedia.org/w/api.php"; 

		let params = {
			action: "query",
			list: "geosearch",
			gscoord: lat + "|" + lon,
			gsradius: "10000",
			gslimit: "10",
			format: "json"
		};
				
		url = url + "?origin=*";
		Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

		fetch(url)
			.then(function(response){return response.json();})
			.then(function(response) {
				this.setState({pois: response.query.geosearch});
			})
			.catch(function(error){console.log(error);});
	}
	
	clear = () => {
		this.setState({ pois: [] });
	};
}
