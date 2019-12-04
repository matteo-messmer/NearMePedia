import { Container } from "unstated";

export default class POIsContainer extends Container {
	
	state = {
		pois: [{title:'titolo 1', id:0},{title:'titolo 2', id:1},{title:'titolo 3', id:2},{title:'titolo 4', id:3},{title:'titolo 5', id:4},{title:'titolo 6', id:5},{title:'titolo 7', id:6}]
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
