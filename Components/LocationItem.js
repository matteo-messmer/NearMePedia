import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class LocationItem extends Component {

    reverseGeocode = async () => {
        let geo =  await Location.reverseGeocodeAsync(this.props.location);
        return geo[0].city;
    }

    render(){
        let city = "";
        

       // this.reverseGeocode().then(function(result) {city = result;})
        return (

            <View style={styles.item}>
                <Text style={styles.title}> {city} </Text>
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