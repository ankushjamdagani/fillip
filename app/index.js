/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
    SpinLoader
} from './components';

export default class fillip extends Component {
  render() {
    return (
        <SpinLoader />
    );
  }
}

AppRegistry.registerComponent('fillip', () => fillip);
