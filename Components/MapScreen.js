import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import POIsContainer from '../Unstated/POIsContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';

export default class MapScreen extends React.Component {
  render() {
    return (
		<Subscribe to={[POIsContainer, PositionContainer]}>
			{
				(pois, position) => {
					const markers = pois.state.savedLocations.map((poi) => <Marker
																								  coordinate={{ latitude: poi.coords.lat, longitude: poi.coords.lon}}
																								  title={poi.name}
																								/>);
					
					return(
					  <MapView
						style={{ flex: 1 }}
						provider={PROVIDER_GOOGLE}
						showsUserLocation
						initialRegion={{
						  latitude: position.state.lat,
						  longitude: position.state.lon,
						  latitudeDelta: 0.0922,
						  longitudeDelta: 0.0421,
						}}>
						{
							markers
						}
					  </MapView>
				  );
				}
			}
    );
  }
}

Map.navigationOptions = ({ navigation }) => ({
  title: "Maps",
})