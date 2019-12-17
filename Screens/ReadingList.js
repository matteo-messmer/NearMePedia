import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import { Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import ArticlesList from '../Components/ArticlesList';
import styles from '../Style';

export default class ReadingList extends Component {

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Subscribe to={[ArticlesContainer]}>
					{
						(pois, articles) => {
							if(pois.state.savedArticles.length === 0) {
								return (
									<View>									
										<Text style={styles.subtitle}>Save articles to read them later here</Text>
									</View>
								);
							}
							else {
								return (
									<View>									
										<ArticlesList data={pois.state.savedArticles}/>
									</View>
								);
							}
						}
					}
				</Subscribe>
			</SafeAreaView>
		);
	}
}

ReadingList.navigationOptions = ({ navigation }) => ({
	title: "Reading list",
})

