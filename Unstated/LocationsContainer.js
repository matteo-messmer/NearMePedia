import { Container } from "unstated";

export default class LocationsContainer extends Container {
	
	state = {
		savedLocations: [
			{
				latitude: 46.5024218,
				longitude: 11.3591007
			}
		],
		loaded: false,
	};
  
  		/*this.setState({
				savedLocations: [
					...this.state.savedLocations,
					savedLocations[i]: {
						...this.state.savedLocations[i],
						[city]: geo[0].city
					}
				]
			});*/
	reverseGeocodeLocations = async () => {
		for(let i = 0; i < this.state.savedLocations.length; i++) {
			let geo = await Location.reverseGeocodeAsync(this.props.location);
	
		}
		this.setState({loaded: true});
	}
	
	clear = () => {
		this.setState({ nearArticles: null });
	};

	saveArticle = async (article) => {
		if(this.state.savedArticles.some(a => a.title === article.title)){
			alert('Article already in the reading list: ' + article.title);
		} else {
			await this.setState(state => ({savedArticles: [...state.savedArticles, article]}));
		}
	}
}
