import React, { Component } from 'react';
import { Card, } from 'react-native-elements';
import { Text, View, TouchableOpacity, Image } from 'react-native';
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
						let deleteArticle;
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
								<View style={{
									position: 'absolute',
									top: 20,
									bottom: 20,
									left: 130,
									right: 0,
									justifyContent: 'flex-end',
								}}>
									<Image source={require("./checkmark.png")}
										style={{
											height: 35,
											width: 35,
										}}>

									</Image>
								</View>

							);

							deleteArticle = (
								<TouchableOpacity onPress={() => articles.deleteArticle(this.props.article)}>
									<View style={styles.deleteButton}>
										<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Delete</Text>
									</View>
								</TouchableOpacity>

							);

						}


						return (
							<Card title={this.props.article.title}>
								<Text>Distance: {this.props.distance.toFixed(1)} Km</Text>

								<View style={styles.buttonRow}>
									<TouchableOpacity onPress={() => articles.loadArticleInBrowser(this.props.article.pageid)}>
										<View style={styles.openButton}>
											<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Open</Text>
										</View>
									</TouchableOpacity>
									{saveArticle}
									{deleteArticle}
								</View>
								<Compass></Compass>
							</Card>
						);
					}
				}
			</Subscribe>
		);
	}
}