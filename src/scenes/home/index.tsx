import * as React from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';

export const HomeScreen = () => {
  console.log(Config);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen {Config.ENV} nekk </Text>
      <Text>current env: {Config.ENV}</Text>
    </View>
  );
};
