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
import styles from '../Style';

function Separator() {
    return <View style={styles.separator} />;
}

export default class AddLocation extends Component {
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

                        <Text style={styles.body}>Insert the location you want to add</Text>
						
						<Subscribe to={[LocationsContainer]}>
							{
								locations => {
									return(
										<View>
											<View>
												<TextInput
													style={styles.input}
													onChangeText={value => locations.setNewLocation(value)}/>
											</View>
											<View>
												<TouchableOpacity onPress={() => {
																									locations.saveLocation();
																									this.props.navigation.navigate('ChangeLocation');
																								}
																							}>
													<View style={styles.button}>
														<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Save</Text>
													</View>
												</TouchableOpacity>
											</View>
										</View>
									);
								}
							}
						</Subscribe>
                        <Separator />
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

AddLocation.navigationOptions = ({ navigation }) => ({
    title: "New location",
})