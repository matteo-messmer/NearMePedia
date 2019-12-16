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
                                    return (
                                        <View>
                                            <View>
                                                <TextInput
                                                    style={styles.input}
                                                    onChangeText={value => locations.setNewLocation(value)} />
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