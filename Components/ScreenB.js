import React, { Component } from 'react';
import POIsContainer from '../Unstated/POIsContainer';
import { Subscribe } from 'unstated';
import { Text, ListView, View } from 'react-native';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

export default class ScreenB extends Component {

  render() {
    //this.getPOIsFromApiAsync(45, 7);
    return (
      <Subscribe to={[POIsContainer]}>
		{pois => <SimpleList value={pois.state.pois} />}
      </Subscribe>
    );
  }
}
