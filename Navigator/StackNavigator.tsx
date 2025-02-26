import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Import Screens
import Splash from '../screens/Splash/Splash';
import Login from '../screens/Login/Login';
import Signup from '../screens/SignUp/Signup';
import HomeNavigator from './HomeNavigator';
import LoginSignup from '../screens/LoginSignup/LoginSignup';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginSignup');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Stack.Navigator  initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginSignup"
        component={LoginSignup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />  
    </Stack.Navigator>
  );
}
