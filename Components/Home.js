import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import { Text, FlatList, View, SafeAreaView, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import ArticlesList from './ArticlesList';
import { getUnavailabilityReason } from 'expo/build/AR';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import styles from '../Style';


export default class Home extends Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.background}>Here's a list of locations around your selected position</Text>
			<Subscribe to={[ArticlesContainer, PositionContainer]}>
				{
					(pois, position) => {
						const { nearArticles, error, loading } = pois.state;

						if (!nearArticles && !error && !loading) {
							pois.getArticlesFromApiAsync(position.state.latitude, position.state.longitude);
						}
							
							
						return (
							<ArticlesList data={pois.state.nearArticles} />
						);
					}
				}
			</Subscribe>
      </SafeAreaView>
    );
  }
}

Home.navigationOptions = ({navigation}) => ({
  title: "Articles",
  headerRight:  <Button 
  title="Change location" 
  onPress={() => navigation.navigate("ChangeLocation")}/>
})