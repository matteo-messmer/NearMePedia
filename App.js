import React, { Component } from 'react';
import { Provider } from 'unstated';
import { Text, ListView } from 'react-native';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

export default class App extends Component {
	state = {
		loading: true,
		data: [],
	};

	getPOIsFromApiAsync(lat, lon) {
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
				let pages = response.query.geosearch;
				for (var place in pages) {
					console.log(pages[place].title);
				}
			})
			.catch(function(error){console.log(error);});
	}

	render() {
		this.getPOIsFromApiAsync(45,7);
		
		if (this.state.loading) {
			return <Text>hey</Text>;
		}
		return (
			<Provider>
				<ListView
					dataSource={this.state.data}
					renderRow={rowData => <Text>{rowData.title}</Text>}
				/>
			</Provider>
		);
	}
}
