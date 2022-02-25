/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
// import {sharedVariable} from '@sharecode/common';
import {sharedVariable} from '../../common';

const App = () => {
  return (
    <View>
      <Text>{sharedVariable}</Text>
    </View>
  );
};

export default App;
