import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/Colors';

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Change Profile</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            /* Handle Sign In action */
          }}>
          <Text style={styles.loginButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        
        <Text style={styles.optionText}>Notifications</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            /* Handle Sign In action */
          }}>
          <Text style={styles.loginButtonText}>Toggle</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Privacy</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            /* Handle Sign In action */
          }}>
          <Text style={styles.loginButtonText}>Manage</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Language</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            /* Handle Sign In action */
          }}>
          <Text style={styles.loginButtonText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003b64',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    color: `${colors.black}`,
  },
  loginButton: {
    backgroundColor: `${colors.gold}`,
    padding: 10,
    borderRadius: 10,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  loginButtonText: {
    color: `${colors.black}`,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
