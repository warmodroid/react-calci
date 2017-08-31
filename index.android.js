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

  constructor(props){
    super(props);
    this.onButtonStateChange = this.onButtonStateChange.bind(this);
    this.state = {value: ''};
  }

  onButtonStateChange(newValue) {
    const v = newValue;
    this.setState({value:v});
  }

  render() {
    return (
      <View style = {styles.parent}>
        <ResultDisplay display={this.state.value}/>
        <Buttons onStateChange={this.onButtonStateChange}/>
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
