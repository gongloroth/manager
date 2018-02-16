/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { creatStore } from 'redux';

class App extends Component {
  render() {
    return() {
      <Provider store={creatStore()}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    }
  }
}

export default App;
