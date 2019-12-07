import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import { Subscribe } from 'unstated';
import { Text, ListView, View, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}


export default class ScreenB extends Component {

  state = {
    location: '',
  }

  aroundYou = (lan, lon) => {

    this.props.navigation.navigate('ScreenA', { lan, lon });
  }

  render() {

    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>

            <Text style={styles.title}>
              Change the location to see other articles</Text>
            <Separator />
          </View>
          <View>
            <Text style={styles.body}>
              Use your current location to see the articles around you!</Text>
            <View style={styles.button}>
              <Button
                title="See articles around you"
                color="black"
                aroundYou={() => this.showDetail(lan, lon)}
              />
            </View>
            <Separator />
          </View>

          <View>

            <Text style={styles.body}>
              Change the location to see other articles!</Text>

            <View style={styles.button}>
              <Button
                title="Choose your location"
                color="black"
                onPress={() => this.props.navigation.navigate('DeckHome')}
              />
            </View>
            <Separator />
          </View>

          <View>

            <Text style={styles.body}>
              Add a new location</Text>

            <Text style={styles.body}>Street number: </Text>
            <TextInput
              style={styles.input}
              value={this.state.location}
            //onChangeText={this.handlePhoneChange} 
            />

            <Text style={styles.body}>Address: </Text>
            <TextInput
              style={styles.input}
              value={this.state.location}
            //onChangeText={this.handlePhoneChange} 
            />

            <View style={styles.button}>

              <Button
                title="Add location"
                color="black"
                onPress={() => this.props.navigation.navigate('DeckHome')}
              />
            </View>
            <Separator />
          </View>
        </ScrollView>
      </SafeAreaView>

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
