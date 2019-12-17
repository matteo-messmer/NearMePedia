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
						let actionButton;
						
						//if the articles has not been saved
						if (!articles.state.savedArticles.some(l => l.title === this.props.article.title)) {
							actionButton = (
								<TouchableOpacity onPress={() => articles.saveArticle(this.props.article)}>
									<View style={styles.secondaryButton}>
										<Text style={styles.buttonText}>Save</Text>
									</View>
								</TouchableOpacity>
							);
						} 
						else {
							actionButton = (
								<TouchableOpacity onPress={() => articles.deleteArticle(this.props.article)}>
									<View style={styles.deleteButton}>
										<Text style={styles.buttonText}>Delete</Text>
									</View>
								</TouchableOpacity>
							);
						}
									/*<Compass size={"100"} coords={{lat: this.props.article.lat, lon: this.props.article.lon}}/>*/

						return (
							<Card title={this.props.article.title}>
								<View style={styles.cardContent}>
									
									
									
									<Text style={styles.cardText}>Distance: {this.props.distance.toFixed(1)} Km</Text>
								</View>
								<View style={styles.rowContainer}>
									<View style={styles.fillColumn}>
										<TouchableOpacity onPress={() => articles.loadArticleInBrowser(this.props.article.pageid)}>
											<View style={styles.primaryButton}>
												<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Open</Text>
											</View>
										</TouchableOpacity>
									</View>
									<View style={styles.fillColumn}>
										{actionButton}
									</View>
								</View>
								
							</Card>
						);
					}
				}
			</Subscribe>
		);
	}
}//<Compass></Compass>