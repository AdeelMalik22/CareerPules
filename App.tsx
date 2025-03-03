import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import Toast from 'react-native-toast-message';
import Auth from './Navigator/Auth';

export default function App() {
  return (
    
    <Provider store={store}>
    <NavigationContainer >
      <Auth />
      <Toast />
    </NavigationContainer>
    </Provider>
  );
}
