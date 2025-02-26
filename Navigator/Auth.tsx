import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeNavigator from './HomeNavigator';
import StackNavigator from './StackNavigator';
import { ActivityIndicator, View } from 'react-native';

function Auth() {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("authToken",authToken)
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1890FF" />
      </View>
    );
  }

  return authToken ? <HomeNavigator /> : <StackNavigator />;
}

export default Auth;
