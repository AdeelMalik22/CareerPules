import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors, textColor } from '../utils/Colors';

interface props {
  profile?: boolean,
  notification?: boolean
}
export default function Header({profile,notification}: props) {
  console.log("profile",profile)
  console.log("notification",notification)
  return (
    <View style={[styles.container, profile && styles.profileContainer]}>
      <Text style={styles.logoText}>
      Career
        <Text style={styles.logoRest}> Pulse</Text>
      </Text>
      <View style={styles.profileContainer}>
      {notification  && <Image source={require('../Assets/Icons/notification.png')} style={styles.notification} />}
      {profile  && <Image source={require('../Assets/Images/profile.webp')} style={styles.profileImage} />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${colors.gold}`,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notification:{
    width: 25,
    height: 25,
    marginRight: 10,
    tintColor: '#fff'
  },
  logoText: {
    fontSize: 30,
    color: textColor, 
    fontWeight: 'bold',
  },
  logoRest: {
    color: textColor, 
  },
  profileImage:{
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
