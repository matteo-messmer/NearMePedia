import { Container } from "unstated";

export default class POIsContainer extends Container {
	
	state = {
		poisList: null, // [{title:'titolo 1', id:0},{title:'titolo 2', id:1},{title:'titolo 3', id:2},{title:'titolo 4', id:3},{title:'titolo 5', id:4},{title:'titolo 6', id:5},{title:'titolo 7', id:6}]
		error: null,
		loading: false,
	};
  
	getPOIsFromApiAsync = async (lat, lon) => {
		await this.setState({ loading: true });
		
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
 
		try {
			const result = await fetch(url).then(r => r.json());
			const poisList = result.query.geosearch;
			await this.setState({ poisList, loading: false });
		} catch(error) {
			alert(error);
			await this.setState({ error, loading: false });
		}
	}
	
	clear = () => {
		this.setState({ pois: [] });
	};
}
