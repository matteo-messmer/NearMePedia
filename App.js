import React, { Component } from 'react';
import { Provider } from 'unstated';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Text, ListView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Components/Home';
import ChangeLocation from './Components/ChangeLocation';
import ReadingList from './Components/ReadingList';
import MapScreen from './Components/MapScreen';
import AddLocation from './Components/AddLocation'

const stackRoutes = {
  Home: Home,
  ChangeLocation: ChangeLocation,
  ReadingList: ReadingList,
  MapScreen: MapScreen,
  AddLocation: AddLocation
}

const stackOptions = {
  initialRouteName: 'Home'
}

const readingList = {
  ReadingList: ReadingList,
}

const mapScreen = {
  MapScreen: MapScreen,
}

const StackNavigator = createStackNavigator(stackRoutes, stackOptions)
const ReadingListNavigator = createStackNavigator(readingList)
const Map = createStackNavigator(mapScreen)

const getIcon = (name, focused, tint) => {
  const color = focused ? tint : "grey"
  return <Ionicons name={name} size={25} color={color} />
}

const tabRoutes = {
  Articles: StackNavigator,
  'Reading list': ReadingListNavigator,
  'Map' : Map,
}
StackNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tint }) => getIcon("ios-list", focused, tint),
}

ReadingListNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tint }) => getIcon("ios-bookmark", focused, tint),
}

Map.navigationOptions = {
  tabBarIcon: ({ focused, tint }) => getIcon("ios-map", focused, tint),
}

const TabNavigator = createBottomTabNavigator(tabRoutes)

const switchRoutes = {
  Main: TabNavigator
}
const switchOptions = {
  initialRouteName: 'Main'
}
const AppNavigator = createSwitchNavigator(switchRoutes, switchOptions)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}