import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';
import { Linking, Text, StyleSheet, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import Compass from './Compass';
import styles from '../Style';
import { Magnetometer } from 'expo-sensors';

export default class Article extends Component {

	state = {

		isReady: false,
		v: null,

	}

	_setupMagnetometerAsync = async () =>  {

		Magnetometer.addListener((v) =>{
			this.setState({v});
		});

	}
	componentDidMount() {
		this._setupMagnetometerAsync();
	}


	render() {

		let theta = "0rad";
		if (this.state.v) {
			let {x,y,z} = this.state.v;
			theta = Math.atan(-x/y);
			if (-x > 0 && y > 0)
			{

			}
			else if (y > 0){
				theta += Math.PI;

			}
			else {
				theta += Math.PI * 2;
			}
		}
		return (
			<Subscribe to={[ArticlesContainer]}>
				{
					articles => {
						let saveArticle;
						if(!articles.state.savedArticles.some(l => l.title === this.props.article.title)) {
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
								
								<View style = {styles.containerb}>
									<TouchableOpacity onPress={() => articles.loadArticleInBrowser(this.props.article.pageid)}>
										<View style={styles.button}>
											<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Open</Text>
										</View>
									</TouchableOpacity>
									{saveArticle}
								</View>
								<View>
						
									<ImageBackground source = {require("./CompassFace.png")} style = {{
										height: 120,
										width: 120,
										alignItems: 'center',
										justifyContent: 'center'
									}}>

										<Image source = {require("./CompassNeedle.png")} 
										style = {{
											height: 100,
											width: 100,
											opacity: 0.65,
											transform: [{rotate: theta+'rad'}]
										}}></Image>
									</ImageBackground>
									<Text>{JSON.stringify(this.state.v)}</Text>
								</View>
							</Card>
						);
					}
				}
				</Subscribe>
		);
	}
}/*this.props.article.thumbnail.source.replace(/[0-9]+px/g, '512px')*/