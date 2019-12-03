import React, { Component } from 'react';
import { Provider } from 'unstated';
import { Text, ListView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AppNavigator = createStackNavigator({

  ScreenA: ScreenA,
  ScreenB: ScreenB,

},


  {

    navigationOptions: {
      headerTintColor: 'white',
      title: 'Home',
      headerStyle: {
        backgroundColor: 'grey'
      }
    }
  }
);


const TabNavigator = createBottomTabNavigator({

  ScreenA: {

    screen: AppNavigator

  },

  "Settings": {

    screen: Settings,

  },


},


  {

    tabBarOptions: {


      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      activeTintColor: 'black',
      barStyle: { backgroundColor: '#grey' },
    }
  },

  AppNavigator.navigationOptions = {

    tabBarIcon: ({ tintColor }) =>
      (

        <Ionicons

          name="ios-bookmarks"
          size={25}
          color={tintColor} />
      )


  },


);

export default class App extends React.Component {

  render() {
    return (
      //<AppNavigator /> ,
      <TabNavigator />
    );
  }
}
