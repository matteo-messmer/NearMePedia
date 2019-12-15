import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import { Text,} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import ArticlesList from './ArticlesList';
import styles from '../Style';

export default class ReadingList extends Component {

	render() {
		return (
			<SafeAreaView style={styles.container}>

				<Text style={styles.background}>Here's a list of locations you saved</Text>
				<Subscribe to={[ArticlesContainer]}>
					{
						(pois) => {
							return (
								<ArticlesList data={pois.state.savedArticles} />
							);
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

