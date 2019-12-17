import { Container } from "unstated";
import { Linking } from 'react-native';

export default class ArticlesContainer extends Container {
	
	state = {
		savedArticles: [],
		nearArticles: null, 
		error: null,
		loading: false,
		index: 0,
	};
	
  	loadArticleInBrowser = (id) => {
		Linking.openURL('http://en.wikipedia.org/?curid=' + id).catch(err => console.error("Couldn't load page", err));
	};
	
	getArticlesFromApiAsync = async (lat, lon) => {
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
			const nearArticles = (await fetch(url).then(r => r.json())).query.geosearch;
			await this.setState({ nearArticles, loading: false });
		} catch(error) {
			alert(error);
			await this.setState({ error, loading: false });
		}
	}
	
	clear = () => {
		this.setState({ nearArticles: null });
	};

	saveArticle = (article) => {
		if(this.state.savedArticles.some(a => a.title === article.title)){
			alert('Article already in the reading list: ' + article.title);
		} else {
			this.setState(state => ({savedArticles: [...state.savedArticles, article]}));
		}
	};

	deleteArticle = (article) => {
		let articles = this.state.savedArticles.filter(a => a.title !== article.title);
		this.setState({savedArticles: articles});
	};
}
