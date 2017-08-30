import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Buttons from './app/Buttons';
import ResultDisplay from './app/ResultDisplay';

export default class Cal extends Component {
  render() {
    return (
      <View style = {styles.parent}>
        <ResultDisplay/>
        <Buttons/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column'
  },
});

AppRegistry.registerComponent('Cal', () => Cal);
