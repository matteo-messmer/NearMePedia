import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';

export default class MapScreen extends React.Component {
  render() {
    return (
		<Subscribe to={[ArticlesContainer, PositionContainer]}>
			{
				(pois, position) => {
					const markers = pois.state.savedArticles.map((poi) => <Marker
																								  coordinate={{ latitude: poi.lat, longitude: poi.lon}}
																								  title={poi.title}
																								  key={poi.title}
																								/>);
					
					return(
					  <MapView
						style={{ flex: 1 }}
						provider={PROVIDER_GOOGLE}
						showsUserLocation
						initialRegion={{
						  latitude: position.state.lat,
						  longitude: position.state.lon,
						  latitudeDelta: 1,
						  longitudeDelta: 1,
						}}>
						{
							markers
						}
					  </MapView>
				  );
				}
			}
		</Subscribe>
    );
  }
}

Map.navigationOptions = ({ navigation }) => ({
  title: "Maps",
})