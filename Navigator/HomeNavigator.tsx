import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Screens/HomeScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import SettingScreen from '../Screens/SettingScreen';
// import AddScreen from '../Screens/AddScreen';
import HomeIcon from "../Assets/Icons/Home.png";
import ProfileIcon from '../Assets/Icons/profile.png';
import SettingIcon from '../Assets/Icons/Setting.png';
import AddIcon from '../Assets/Icons/add.png';
// import Search from '../Assets/Icons/search.png';
 
import {Image} from 'react-native';
import Home from '../screens/Home';
import JobPost from '../screens/JobPost/JobPost';
import Setting from '../screens/Setting/setting';
import Profile from '../screens/Profile/Profile';
import { colors } from '../utils/Colors';

export default function HomeNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator

      screenOptions={{
        tabBarActiveTintColor: '#fff', 
        tabBarInactiveTintColor: '#fff', 
        tabBarStyle: {
          backgroundColor: `${colors.gold}`,
          paddingBottom: 10,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? `${colors.black}` : `${colors.white}`, 
              }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Search}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#8b5cf6' : '#888', 
              }}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Add"
        component={JobPost}

        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={AddIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? `${colors.black}` : `${colors.white}`, 
                // backgroundColor: "#fff"
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={SettingIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? `${colors.black}` : `${colors.white}`, 
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={ProfileIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? `${colors.black}` : `${colors.white}`, 
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
