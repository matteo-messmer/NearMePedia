import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Text, View, TextInput } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LocationsContainer from '../Unstated/LocationsContainer';
import styles from '../Style';

function Separator() {
    return <View style={styles.separator} />;
}

export default class AddLocation extends Component {
    render() {

        return (

            <SafeAreaView style={styles.container}>
                <ScrollView>
					<View>
                        <Subscribe to={[LocationsContainer]}>
                            {
                                locations => {
                                    return (
                                        <View>
                                            <View>
                                                <TextInput style={styles.textInput} 
													onChangeText={value => locations.setNewLocation(value)} 
													placeholder="Address" />
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={() => {
																								locations.saveLocation();
																								this.props.navigation.navigate('ChangeLocation');
																							}
																						}>
                                                    <View style={styles.primaryButton}>
                                                        <Text style={styles.buttonText}>Save</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                }
                            }
                        </Subscribe>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

AddLocation.navigationOptions = ({ navigation }) => ({
    title: "New location",
})