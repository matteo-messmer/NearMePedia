import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';
import {Linking,Text} from 'react-native';

export default class Article extends Component {
	loadInBrowser = (id) => {
		Linking.openURL('http://en.wikipedia.org/?curid=' + id).catch(err => console.error("Couldn't load page", err));
	};
	
	render() { 
		return (
			<Card
				title={this.props.article.title}         

				image={{uri: 'https://i.etsystatic.com/10589613/r/il/2b6a3a/1359294046/il_570xN.1359294046_3q07.jpg'}}>
					<Text>{this.props.distance.toFixed(1)} Km</Text>
					<Button
						buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
						title='Open' onPress={() => this.loadInBrowser(this.props.article.pageid)}/>
			</Card>
		);
	}
}/*this.props.article.thumbnail.source.replace(/[0-9]+px/g, '512px')*/