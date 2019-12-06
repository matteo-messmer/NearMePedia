import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import { Subscribe } from 'unstated';
import { Text, ListView, View, StyleSheet, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}


export default class ScreenC extends Component {

  render() {

    return (

      <View style={styles.container}>
        <View>

          <Text style={styles.title}>
            Reading list</Text>
          <Separator />
        </View>
        <View>
          <Text style={styles.body}>
            You saved the following articles:</Text>
          <Separator />
        </View>


      </View>

    );
  }
}

ScreenC.navigationOptions = ({ navigation }) => ({
  title: "Reading list",
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

});
