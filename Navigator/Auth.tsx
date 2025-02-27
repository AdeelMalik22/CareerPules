import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeNavigator from './HomeNavigator';
import StackNavigator from './StackNavigator';
import { ActivityIndicator, View } from 'react-native';

function Auth() {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("authToken -------------->", authToken);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        
        setAuthToken(token);
      } catch (error) {
        console.error("Error retrieving token: ", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Show loading spinner until the auth token is retrieved
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1890FF" />
      </View>
    );
  }

  // Show HomeNavigator if authToken exists, otherwise show StackNavigator
  return authToken ? <HomeNavigator /> : <StackNavigator />;
}

export default Auth;
