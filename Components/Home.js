import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import { Text, SafeAreaView, Button, } from 'react-native';
import ArticlesList from './ArticlesList';
import styles from '../Style';

export default class Home extends Component {

	render() {
		return (
			<SafeAreaView style={styles.container}>

				<Text style={styles.background}>Here's a list of locations around your selected position</Text>
				<Subscribe to={[ArticlesContainer, PositionContainer]}>
					{
						(articles, position) => {
							const { nearArticles, error, loading } = articles.state;

							if (!nearArticles && !error && !loading) {
								articles.getArticlesFromApiAsync(position.state.latitude, position.state.longitude);
							}

							return (
								<ArticlesList data={articles.state.nearArticles} />
							);
						}
					}
				</Subscribe>
			</SafeAreaView>
		);
	}
}

Home.navigationOptions = ({ navigation }) => ({
	title: "Articles",
	headerRight: <Button
		title="Change location"
		onPress={() => navigation.navigate("ChangeLocation")} />
})