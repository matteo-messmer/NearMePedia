import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import { Subscribe } from 'unstated';
import { Text, FlatList, View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ScreenA extends Component {

	render() {
		//this.getPOIsFromApiAsync(45, 7);
		return (
				<SafeAreaView style={styles.container}>
					<Subscribe to={[POIsContainer]}>
						{
							pois => {
								const { poisList, error, loading } = pois.state;
								
								if (!poisList && !error && !loading) {
									pois.getPOIsFromApiAsync(45,7);
								}
								return (<FlatList
											data={poisList}
											renderItem={({ item }) => <Item title={item.title} />}
											keyExtractor={item => item.pageid}
										/>);
							}
						}
					</Subscribe>
				</SafeAreaView>
			);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});