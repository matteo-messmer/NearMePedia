import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import { CoordinatesContainer } from 'unstated';
import { Text, ListView, View, StyleSheet, Button, TextInput } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';
import LocationsContainer from '../Unstated/LocationsContainer';
import LocationItem from './LocationItem';


function Separator() {
    return <View style={styles.separator} />;
}

export default class AddLocation extends Component {

    handleChange = (data) => {
        this.setState(data);
    }

    render() {

        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.container}>
                        <View>

                            <Text style={styles.title}>
                                Add a new location</Text>
                            <Separator />
                        </View>

                    </View>
                    <View>

                        <Text style={styles.body}>
                            Insert the location you want to add</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={value => this.handleChange({ addLocation: value })}

                        />

                        <View style={styles.button}>

                            <Subscribe to={[LocationsContainer]}>
                                {
                                    locations => {
                                        if (!locations.state.loaded) {
                                            locations.reverseGeocodeLocations();
                                            return null;
                                        } else {
                                            return (
                                                <Button
                                                    title="Add location"
                                                    color="black"
                                                    onPress={() => {

                                                        locations.state.savedLocations.push({

                                                            
                                                            city: this.state.addLocation,
                                                            //coords: this.state.addLocation
                                                            
                                                        }

                                                        )
                                                        alert('You added the location!');
                                                        this.props.navigation.navigate('ChangeLocation');
                                                    }}
                                                />
                                            );
                                        }
                                    }
                                }
                            </Subscribe>
                        </View>
                        <Separator />
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

// Initialize the module (needs to be done only once)
// use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

Geocoder.from("Colosseum")
    .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
    })
    .catch(error => console.warn(error));

Geocoder.from(41.89, 12.49)
    .then(json => {
        var addressComponent = json.results[0].address_components[0];
        console.log(addressComponent);
    })
    .catch(error => console.warn(error));

// Works as well :
// ------------

// location object
Geocoder.from({
    latitude: 41.89,
    longitude: 12.49
});

// latlng object
Geocoder.from({
    lat: 41.89,
    lng: 12.49
});

// array
Geocoder.from([41.89, 12.49]);

//AIzaSyDOZf_oV5F9eMvMCquOR8m9jZQAmDm__5s

AddLocation.navigationOptions = ({ navigation }) => ({
    title: "New location",
})


const styles = StyleSheet.create({

    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#eeeeee',
        // justifyContent: 'center',
        textAlign: 'center',
    },
    article: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },

    background: {
        backgroundColor: '#eeeeee',
        fontSize: 23,
        textAlign: 'center',
        paddingTop: 10,
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 23,
        fontWeight: 'bold',
    },

    body: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 19,

    },

    button:
    {
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        margin: 10,
        color: "black",
        backgroundColor: '#81b9bf',
        borderColor: '#52898f',
    },
    separator: {
        marginVertical: 4,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 10
    }

});
