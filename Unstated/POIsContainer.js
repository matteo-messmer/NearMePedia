import { Container } from "unstated";

export default class POIsContainer extends Container {
	
	state = {
		poisList: null, 
		error: null,
		loading: false,
	};
  
	getPOIsFromApiAsync = async (lat, lon) => {
		await this.setState({ loading: true });
		
		let url = "https://en.wikipedia.org/w/api.php"; 

		let params = {
			    action: "query",
    generator: "geosearch",
    prop: "coordinates|pageimages",
    ggscoord: lat + "|" + lon,
    format: "json"
		};
				
		url = url + "?origin=*";
		Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
 
		try {
			const result = await fetch(url).then(r => r.json());
			
			const poisList = await Object.values(result.query.pages);
			//alert(result.query);
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
