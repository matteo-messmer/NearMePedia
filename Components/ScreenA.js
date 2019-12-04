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

  constructor() {
    super();
    this.state = {
      ready: false,
      where: { lat: null, lon: null },
      error: null,

    }

  }

  componentDidMount() {

    let geoOptions = {
      enableHighAccurancy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24,
    };

    this.setState({ ready: false, error: null }),
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)
  }


  geoSuccess = (position) => {


    var numLat = position.coords.latitude;
    var numLon = position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    numLat = numLat.toFixed(0);
    numLon = numLon.toFixed(0);

    console.log(numLat);
    console.log(numLon);

    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lon: position.coords.longitude }
    })

  }

  geoFailure = (err) => {
    this.setState({ error: err.message });
  }



  render() {

    //this.getPOIsFromApiAsync(45, 7);
    return (
      <SafeAreaView style={styles.container}>

        <View>
          {!this.state.ready && (
            <Text> Using Geolocation</Text>
          )}
          {this.state.error && (
            <Text>{this.state.error}</Text>
          )}
          {this.state.ready && (
            <Text>
              Latitude: {this.state.where.lat}
              Longitude: {this.state.where.lon}
            </Text>

          )}

        </View>


        <Subscribe to={[POIsContainer]}>

          {
            pois => {
              const { poisList, error, loading } = pois.state;

              if (!poisList && !error && !loading) {
                pois.getPOIsFromApiAsync(46, 11);
              }
              return (
                <FlatList
                  data={poisList}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.pageid}
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
  item: {
    backgroundColor: '#4463a0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
});