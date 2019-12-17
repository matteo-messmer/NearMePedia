import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import GPSContainer from '../Unstated/GPSContainer';
import { Subscribe } from 'unstated';
import { Text, SafeAreaView, Button, ActivityIndicator, TouchableOpacity, View} from 'react-native';
import ArticlesList from '../Components/ArticlesList';
import styles from '../Style';


export default class Home extends Component {

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Subscribe to={[ArticlesContainer, PositionContainer, GPSContainer]}>
					{
						(articles, position, gps) => {
							if(position.state.loading) {
								if(!gps.state.loading) {
									position.setCoordinates({latitude: gps.state.latitude, longitude: gps.state.longitude});
								}
								return (
									<ActivityIndicator size="large" color="#0000ff" />
								);
							} else {
								const { nearArticles, error, loading } = articles.state;

								if (!nearArticles && !error && !loading) {
									articles.getArticlesFromApiAsync(position.state.latitude, position.state.longitude);
								}

								return (
									<ArticlesList data={articles.state.nearArticles} />
								);
							}
						}
					}
				</Subscribe>
			</SafeAreaView>
		);
	}
}

Home.navigationOptions = ({ navigation }) => ({
	title: "Articles",
	headerRight: <TouchableOpacity onPress={() => { navigation.navigate('ChangeLocation');}}>
							<View style={styles.iconButton}>
								<Ionicons name="ios-navigate" size={25} />
							</View>
                           </TouchableOpacity>
})