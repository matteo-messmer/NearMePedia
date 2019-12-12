import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { FlatList } from 'react-native-gesture-handler';



function Item({location}) {
    let geo =  Location.reverseGeocodeAsync(location);
    return (
        <View style={styles.item}>
            <Text style={styles.title}> {geo[0].city} </Text>
        </View>
    );
}

export default class ScreenD extends Component {

    state = {
        location: null,
        errorMessage: null,
        geo: null
    };

    _getLocationAsync = async (location) => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        //let location = await Location.getCurrentPositionAsync({});
        let geo = await Location.reverseGeocodeAsync(location);
    };

    render() {
        const DATA = [
            {
                latitude: 46.2595667,
                longitude: 11.0636139,
            },
            {
                latitude: 46.2595667,
                longitude: 11.0636139,
            },
            {
                latitude: 46.2595667,
                longitude: 11.0636139,
            }
        ];

        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.geo) {
            text = (this.state.geo[0].city);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item location={item} />}
                    keyExtractor={item => item.location}
                />
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