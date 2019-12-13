import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';
import { Linking, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import styles from '../Style';

export default class Article extends Component {
	loadInBrowser = (id) => {
		Linking.openURL('http://en.wikipedia.org/?curid=' + id).catch(err => console.error("Couldn't load page", err));
	};


	render() {
		return (

			<Card
				title={this.props.article.title}

				image={{ uri: 'https://i.etsystatic.com/10589613/r/il/2b6a3a/1359294046/il_570xN.1359294046_3q07.jpg' }}>
				<Text>Distance: {this.props.distance.toFixed(1)} Km</Text>
				<View style = {styles.containerb}>
					<TouchableOpacity onPress={() => this.loadInBrowser(this.props.article.pageid)}>
						<View style={styles.button}>
							<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Open</Text>
						</View>
					</TouchableOpacity>
					
					<Subscribe to={[ArticlesContainer]}>
						{
							pois => {
								if(!pois.state.savedArticles.some(l => l.title === this.props.article.title)) {
									return(
										<TouchableOpacity onPress={() => pois.saveArticle(this.props.article)}>

											<View style={styles.saveButton}>
												<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Save</Text>
											</View>

										</TouchableOpacity>
									);
								} else {
									return (
										<View style={styles.saveButton}>
											<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Saved!</Text>
										</View>
									);
								}
							}
						}
					</Subscribe>
				</View>

			</Card>


		);
	}
}/*this.props.article.thumbnail.source.replace(/[0-9]+px/g, '512px')*/