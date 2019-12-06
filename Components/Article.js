import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';

export default class Article extends Component {
	
	render() {
  return (

<Card
  title={this.props.article.title}         

  image={{uri: this.props.article.thumbnail.source.replace(/[0-9]+px/g, '512px')}}>
  <Button
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Open' />
</Card>
  );
}
}