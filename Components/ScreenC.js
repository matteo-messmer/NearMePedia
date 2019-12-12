import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import { Subscribe } from 'unstated';
import { CoordinatesContainer  } from 'unstated';
import { Text, ListView, View, StyleSheet, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Constants from 'expo-constants';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import styles from '../Style';




function Separator() {
  return <View style={styles.separator} />;
}


export default class ScreenC extends Component {


  render() {

    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
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
        </ScrollView>
      </SafeAreaView>

    );
  }
}

ScreenC.navigationOptions = ({ navigation }) => ({
  title: "Reading list",
})

