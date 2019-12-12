import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import PositionContainer from '../Unstated/PositionContainer';
import { Subscribe } from 'unstated';
import { Text, ListView, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

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
			<Subscribe to={[PositionContainer, POIsContainer]}>
				{
					(position, pois) => {
						return(
						<TouchableOpacity onPress={() => {
																					position.geoLocate(() => {
																						pois.clear();
																						pois.getPOIsFromApiAsync(position.state.lat, position.state.lon);
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


const styles = StyleSheet.create({

  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#eeeeee',
    //justifyContent: 'space-between',
    textAlign: 'center',
  },

  containerb: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
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
    height: 50,
    width: 150,
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
