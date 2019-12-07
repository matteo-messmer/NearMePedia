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
			list: "geosearch",
			gscoord: lat +  "|" + lon,
			gsradius: "10000",
			gslimit: "10",
			format: "json"
		};
				
		url = url + "?origin=*";
		Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
 
		try {
			const poisList = (await fetch(url).then(r => r.json())).query.geosearch;
			
			//const poisList = await Object.values(result.query.pages);
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

	saveArticle = () => {
		this.setState(state => ({
			pois: [...state.pois, state.newItemName],
			newItemName: ""
		  }));
	}

	setNewItemName = event => {
		this.setState({ newItemName: event.target.value });
	  };
}
