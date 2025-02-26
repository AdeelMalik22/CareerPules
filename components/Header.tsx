import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colors, textColor } from '../utils/Colors';
import CustomPopover from './CustomPopover';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface props {
  profile?: boolean,
  notification?: boolean
  back?: boolean
}
export default function Header({profile,notification,back}: props) {
const [popoverVisible, setPopoverVisible] = useState(false);
const navigation = useNavigation();
const handProfile = () => {
  navigation.navigate('Profile')
  setPopoverVisible(false)
}
const handLogout = async () => {
  // console.log('token',token)
   await AsyncStorage.removeItem('token')
   navigation.navigate('Login')
}
  return (
    <View style={[styles.container, profile && styles.profileContainer]}>
      {back && <Pressable onPress={() => navigation.goBack()}>
       <Image style={styles.backIcon} source={require('../Assets/Icons/back.png')}/> 
      </Pressable>}
      <Text style={styles.logoText}>
      Career
        <Text style={styles.logoRest}> Pulse</Text>
      </Text>
      <View style={styles.profileContainer}>
      {notification  && <Image source={require('../Assets/Icons/notification.png')} style={styles.notification} />}
      {profile  && 
      // <Image source={require('../Assets/Images/profile.webp')} style={styles.profileImage} />
      <CustomPopover
      visible={popoverVisible}
      iconImage={require('../Assets/Images/profile.webp')}
      iconStyle={styles.profileImage}
      onClose={() => setPopoverVisible(false)}
      handleIsVisible={() => setPopoverVisible(true)}
      popoverBackground={styles.popoverBackGroundColor}
      Children={
        <View style={styles.popover}>
          <TouchableOpacity onPress={handProfile}>
        <Text style={styles.innerText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handLogout}>
        <Text style={styles.innerText}>Logout</Text>
          </TouchableOpacity>
        </View>
      }
      />
      }
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
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Arial',
  },
  popoverBackGroundColor:{
    backgroundColor: 'none',
  },
  popover: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    width: 100,
    gap: 4,
  },
  backIcon:{
    height: 25,
    width: 25
  }
});
