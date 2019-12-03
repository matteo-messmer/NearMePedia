import React, { Component } from 'react';
import { Provider } from 'unstated';
import { Text, ListView } from 'react-native';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default class App extends Component {
  state = {
    loading: true,
    data: [],
  };
  getPOIsFromApiAsync(lat, lon) {
    return fetch(
      'https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=' +
        lat +
        '|' +
        lon +
        '&gsradius=10000&gslimit=10&format=json'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ loading: false, data: responseJson.query.geosearch });
        console.log(this.state.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    if (this.state.loading) {
      this.getPOIsFromApiAsync(45, 7);
    }
  }

  render() {
    if (this.state.loading) {
      return <Text>hey</Text>;
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
