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

    render() {

        let city = this.props.city;
        //alert(this.props.city);
        return (


            <Subscribe to={[PositionContainer, ArticlesContainer]}>
                {
                    (position, pois) => {
                        return (
                            
                            <TouchableOpacity style={styles.item} onPress={() => {
                                position.geolocation(() => {
                                    pois.clear();
                                    this.props.navigation.navigate("ScreenA");
                                });
                            }
                            }>
                                <View >
                                    <Text style={styles.itemHeader}>{city}</Text>
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