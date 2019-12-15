import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import { Subscribe } from 'unstated';
import { Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import ArticlesList from './ArticlesList';
import styles from '../Style';

export default class ReadingList extends Component {

	render() {
		return (


			<SafeAreaView style={styles.container}>

				<Text style={styles.background}>Here's a list of locations you saved.</Text>
				<Text style={styles.background}>Click here to delete all the saved locations!</Text>

				<Subscribe to={[ArticlesContainer]}>
					{
						(pois, articles) => {
							return (

								<View>
								<TouchableOpacity onPress={() => {
                                articles.clearSavedArticles();
                                this.props.navigation.navigate("Home");
                            }
                            }>
									<View style={styles.deleteSaveButton}>
										<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Delete all the articles</Text>
									</View>
								</TouchableOpacity> 
								<ArticlesList data={pois.state.savedArticles}/>
								</View>
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

