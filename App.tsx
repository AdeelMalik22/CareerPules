import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigator/StackNavigator';
import { View } from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator navigation={undefined} />
    </NavigationContainer>

  );
}
