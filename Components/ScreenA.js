import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import CoordinatesContainer from '../Unstated/CoordinatesContainer';
import { Subscribe } from 'unstated';
import { Text, FlatList, View, SafeAreaView, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import Article from './Article';
import { getUnavailabilityReason } from 'expo/build/AR';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';


export default class ScreenA extends Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.background}>Here's a list of locations around your selected position</Text>
        <Subscribe to={[POIsContainer, CoordinatesContainer]}>
          {
            (pois, coords) => {
              const { poisList, error, loading } = pois.state;

              if (!poisList && !error && !loading) {
                if (!coords.state.lat || !coords.state.lon) {
                  coords.setCoordinates({ lat: 46.2595667, lon: 11.0636139 });
                } else {
                  pois.getPOIsFromApiAsync(coords.state.lat, coords.state.lon);
                }
              }
              return (
                <FlatList style={styles.background}
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

ScreenA.navigationOptions = ({navigation}) => ({
  title: "Articles",
  headerRight:  <Button 
  title="Change location" 
  onPress={() => navigation.navigate("ScreenB")}/>
})


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

  background: {
    backgroundColor: '#eeeeee',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 10,
    marginLeft: 1,
  },
  title: {
    fontSize: 32,
  },

});