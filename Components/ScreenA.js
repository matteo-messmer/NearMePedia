import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import CoordinatesContainer from '../Unstated/CoordinatesContainer';
import { Subscribe } from 'unstated';
import { Text, FlatList, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Article from './Article';


export default class ScreenA extends Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Subscribe to={[POIsContainer, CoordinatesContainer]}>
          {
            (pois, coords) => {
              const { poisList, error, loading } = pois.state;

              if (!poisList && !error && !loading) {
				  if(!coords.state.lat || !coords.state.lon) {
					  coords.setCoordinates({lat: 46.2595667, lon: 11.0636139});
				  } else {
					  pois.getPOIsFromApiAsync(coords.state.lat, coords.state.lon);
				  }
              }
              return (
                <FlatList
                  data={poisList}
                  renderItem={({ item }) => <Article article={item} distance={coords.distance(item.lat, item.lon)} />}
                  keyExtractor={item => item.title}
                />
              );
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
  article: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
});