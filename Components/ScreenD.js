import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { FlatList } from 'react-native-gesture-handler';
import LocationItem from './LocationItem';
import LocationsContainer from '../Unstated/LocationsContainer';
import { Subscribe } from 'unstated';


export default class ScreenD extends Component {

    render() {

        return (
            <View style={styles.container}>
				<Subscribe to={[LocationsContainer]}>
					{
						locations => {
							if(!locations.state.loaded) {
								locations.reverseGeocodeLocations();
								return null;
							} else {
								return (
									<FlatList
										data={locations.state.savedLocations}
										renderItem={({item}) => 
                                        <LocationItem city={item.city} />}
										keyExtractor={item => item.city}
									/>
								);
							}
						}
					}
				</Subscribe>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
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