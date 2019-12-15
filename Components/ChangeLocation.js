import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import { Text, ListView, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import LocationItem from './LocationItem';
import LocationsContainer from '../Unstated/LocationsContainer';
import styles from '../Style';

function Separator() {
  return <View style={styles.separator} />;
}


export default class ChangeLocation extends Component {

  render() {

    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View >

            <Text style={styles.title}>
              Change the location to see other articles</Text>
            <Separator />
          </View>



          <View style={styles.containerb}>
			<Subscribe to={[PositionContainer, ArticlesContainer]}>
				{
					(position, articles) => {
						return(
						<TouchableOpacity onPress={() => {
																					position.geoLocate(() => {
																						articles.clear();
																						this.props.navigation.navigate("Home");
																					});
																				}
																	}>
							<View style={styles.button}>
								<Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>GPS</Text>
							</View>
						</TouchableOpacity>
						);
					}
				}
			</Subscribe>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("AddLocation")}>
              <View style={styles.button}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Add location</Text>
              </View>
            </TouchableOpacity>
          </View>



          <View>

            <Text style={styles.title}>
              Here's a list of locations</Text>
            <Separator />
          </View>

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
										renderItem={({item}) => <LocationItem location={item}/>}
										keyExtractor={item => item.city}
									/>
								);
							}
						}
					}
				</Subscribe>

          
        </ScrollView>
      </SafeAreaView >

    );
  }
}

ChangeLocation.navigationOptions = ({ navigation }) => ({
  title: "Locations",

})
