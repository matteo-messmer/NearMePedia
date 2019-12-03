import React, { Component } from 'react';
import POIsContainer from "../Unstated/POIsContainer";
import { Subscribe } from 'unstated';
import { Text, ListView, View } from 'react-native';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

export default class ScreenA extends Component {
  state = {
    loading: true,
    data: [],
  };

  render() {
    this.getPOIsFromApiAsync(45, 7);

    if (this.state.loading) {
      return <View><Text>hey</Text></View>
        ;
    }
    return (
      <Provider>
        <ListView
          dataSource={this.state.data}
          renderRow={rowData => <Text>{rowData.title}</Text>}
        />
      </Provider>
    );
  }
}
