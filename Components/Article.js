import React, { Component } from 'react';
import { Card, } from 'react-native-elements';
import { Text, View, TouchableOpacity } from 'react-native';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import Compass from './Compass';
import styles from '../Style';

export default class Article extends Component {

	render() {

		return (
			<Subscribe to={[ArticlesContainer]}>
				{
					articles => {
						let saveArticle;
						if (!articles.state.savedArticles.some(l => l.title === this.props.article.title)) {
							saveArticle = (
								<TouchableOpacity onPress={() => articles.saveArticle(this.props.article)}>

									<View style={styles.saveButton}>
										<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Save</Text>
									</View>

								</TouchableOpacity>
							);
						} else {
							saveArticle = (
								<View style={styles.saveButton}>
									<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Saved!</Text>
								</View>
							);
						}


						return (
							<Card title={this.props.article.title}>
								<Text>Distance: {this.props.distance.toFixed(1)} Km</Text>

								<View style={styles.containerb}>
									<TouchableOpacity onPress={() => articles.loadArticleInBrowser(this.props.article.pageid)}>
										<View style={styles.button}>
											<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Open</Text>
										</View>
									</TouchableOpacity>
									{saveArticle}
								</View>
								<Compass></Compass>
							</Card>
						);
					}
				}
			</Subscribe>
		);
	}
}/*this.props.article.thumbnail.source.replace(/[0-9]+px/g, '512px')*/