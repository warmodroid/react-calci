import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ResultDisplay extends Component {
  render() {
    return (
      <View style = {styles.parent}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'rgb(231, 206, 244)',
    flex: 1
  },
});
