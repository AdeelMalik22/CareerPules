import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../utils/Colors';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Career Pulse</Text>
      <Text style={styles.subtitle}>Talents, Jobs & Requirements</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: `${colors.white}`,  
  },
  title: {
    fontSize: 50,  
    fontWeight: 'bold',
    color: `${colors.black}`, 
    marginBottom: 15,
    fontFamily: 'Arial', 
    textTransform: 'uppercase',  
    textShadowColor: `${colors.gold}`,  
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: `${colors.black}`,  
    fontFamily: 'Arial',  
    textAlign: 'center', 
    width: '80%',
    lineHeight: 28,
    opacity: 0.9,  
    marginTop: 10,
    fontWeight: 'bold',
    letterSpacing: 1 
  },
});
