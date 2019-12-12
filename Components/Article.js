import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';
import { Linking, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import POIsContainer from '../Unstated/POIsContainer';
import { Subscribe } from 'unstated';

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
				<View style={styles.container}>
					<TouchableOpacity onPress={() => this.loadInBrowser(this.props.article.pageid)}>
						<View style={styles.button}>
							<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Open</Text>
						</View>
					</TouchableOpacity>
					
					<Subscribe to={[POIsContainer]}>
						{
							pois => {

								<TouchableOpacity onPress={() => pois.saveLocation({coords:{lat: this.props.article.lat, lon: this.props.article.lon}, name: this.props.article.title})}>

									<View style={styles.saveButton}>
										<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Save</Text>
									</View>

								</TouchableOpacity>
							}
						}
					</Subscribe>
				</View>

			</Card>


		);
	}
}/*this.props.article.thumbnail.source.replace(/[0-9]+px/g, '512px')*/


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button:
	{
		alignSelf: 'stretch',
		borderWidth: 1,
		padding: 12,
		borderRadius: 8,
		margin: 10,
		color: "black",
		backgroundColor: '#81b9bf',
		borderColor: '#52898f',
		height: 50,
		width: 210
	},

	saveButton:
	{
		alignSelf: 'stretch',
		borderWidth: 1,
		padding: 12,
		borderRadius: 8,
		margin: 10,
		color: "black",
		backgroundColor: '#52898f',
		borderColor: '#225c62',
		height: 50,
		width: 100
	},





})