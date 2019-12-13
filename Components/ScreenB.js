import React, { Component } from 'react';
import ArticlesContainer from '../Unstated/ArticlesContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import { Text, ListView, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import styles from '../Style';

function Separator() {
  return <View style={styles.separator} />;
}


export default class ScreenB extends Component {

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
					(position, pois) => {
						return(
						<TouchableOpacity onPress={() => {
																					position.geoLocate(() => {
																						pois.clear();
																						this.props.navigation.navigate("ScreenA");
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


          <Separator />

          <TouchableOpacity onPress={() => this.props.navigation.navigate("ScreenD")}>
              <View style={styles.button}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 19 }}>Reverse</Text>
              </View>
            </TouchableOpacity>


          <View>

            <Text style={styles.title}>
              Here's a list of locations</Text>
            <Separator />
          </View>

          <FlatList>

          </FlatList>

          
        </ScrollView>
      </SafeAreaView >

    );
  }
}

ScreenB.navigationOptions = ({ navigation }) => ({
  title: "Locations",

})
