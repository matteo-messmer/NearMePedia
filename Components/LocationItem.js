import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import LocationsContainer from '../Unstated/LocationsContainer';


import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class LocationItem extends Component {

    state = {
        location: null,
        errorMessage: null,
        address: '',
    };

    geolocation = async (callback) => {
        let address = this.props.city;
        let position = await Location.geocodeAsync(address);
        alert(position);

        latitude = JSON.stringify(this.state.position[0].latitude);
        longitude = JSON.stringify(this.state.position[0].longitude);
        callback();


        this.setState({ lat: latitude, lon: longitude });

    };

    _getLocationAsync = async () => {


        let address = this.props.city;

        let location = await Location.geocodeAsync(address)

        let latitude = JSON.stringify(this.state.location[0].latitude);
        let longitude = JSON.stringify(this.state.location[0].longitude);
        this.setState({ location, lat: latitude, lon: longitude });

    };



    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }




    render() {

        let city = this.props.city;

        let latitude = '';
        let longitude = '';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            latitude = JSON.stringify(this.state.location[0].latitude);
            longitude = JSON.stringify(this.state.location[0].longitude);

        }





        //alert(this.props.city);
        return (


            <Subscribe to={[PositionContainer, ArticlesContainer]}>
                {
                    (position, pois) => {
                        return (

                            <TouchableOpacity style={styles.item} onPress={() => {
                                position._getLocationAsync(() => {
                                    pois.clear();
                                    this.props.navigation.navigate("ScreenA");
                                });
                            }
                            }>
                                <View >
                                    <Text style={styles.itemHeader}>{city}</Text>
                                    <Text>Latitude: {this.latitude}</Text>
                                    <Text>Longitude: {this.longitude} </Text>

                                </View>
                            </TouchableOpacity>
                        );
                    }
                }
            </Subscribe>

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
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        margin: 20,

    },
    itemHeader: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    },
    title: {
        fontSize: 32,
    },

});