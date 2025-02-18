import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/Colors';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Here you can handle the signup logic
    if (name && email && password) {
      Alert.alert('Signup Successful!', `Welcome, ${name}`);
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
   <Text style={styles.heading}>Career Pulse</Text>
      <Text style={styles.subHeading}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={'#333'}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={'#333'}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={'#333'}
      />

 <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.white}`,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
     marginBottom: 20,
    textAlign: 'center',
    color: `${colors.black}`,

  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: `${colors.gold}`,
    borderRadius: 30,
    alignItems: 'center',
    color: `${colors.gold}`,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: `${colors.black}`,
  },
  subHeading: {
    fontSize: 18,
    alignSelf: 'center',
    color: `${colors.black}`,
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: `${colors.gold}`,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    color:"#333",
    
    fontSize: 16,
  },
});
