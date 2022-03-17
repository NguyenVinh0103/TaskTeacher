import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UnclockWallet from './src/Component/UnclockWallet';
import SendMain from './src/Component/SendMain';
import SendAssets from './src/Component/SendAssets';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SendMain"
          component={SendMain}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SendAssets"
          component={SendAssets}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UnclockWallet"
          component={UnclockWallet}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
