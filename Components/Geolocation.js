import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import locations from '../LocationList';

export default class Geolocation extends Component {
    state = {
        location: null,
        errorMessage: null,
        address: '',
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

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let address = "Roma";

        let location = await Location.geocodeAsync(address)
        this.setState({ location });
    };

    
    handleChange = (data) => {
        this.setState(data);
    }

    render() {
        let text = 'Waiting..';
        let latitude = '';
        let longitude = '';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            latitude = JSON.stringify(this.state.location[0].latitude);
            longitude = JSON.stringify(this.state.location[0].longitude);

        }

        return (
            <View style={styles.container}>
                
                <Text style={styles.body}>
                    Insert the location you want to add</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleChange({ addLocation: value })}
                   
                />
                <View style={styles.button}>
              

                    <Button
                        title="Add location"
                        color="black"
                        onPress={() => {

                            locations.push({
                                city: this.state.addLocation,
                            }

                            )
                            alert(this.value);
                            alert('You added the location!');
                            alert(this.props.city);

                        }}
                    />
                </View>

                <Text style={styles.paragraph}>{latitude}</Text>
                <Text style={styles.paragraph}>{longitude}</Text>

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
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 10
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
});
