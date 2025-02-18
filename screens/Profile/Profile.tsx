import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/Colors';
import eventData from "../../utils/eventData.json" 
import PostCard from '../../components/PostCard';
const Profile = () => {
  const navigation = useNavigation();
  const popOverRef = useRef(null);
  const [userData] = useState({
    name: 'Emanuel Hasi',
    occupation: 'HR Manager | asdasd |a  | asdadas |ASDasda |Asdasd |aASD |asDASD',
    photos: 1.67,
    followers: 14.5,
    following: 664,
  });
  
  const handleDelete = () => {
    console.log("Deleted")
    Alert.alert("Cant Deleted")
}



  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{userData.name || 'John Doe'}</Text>
          <Text style={styles.profileOccupation}>{userData.occupation || 'Occupation'}</Text>
        </View>
        <Image source={require('../../Assets/Images/profile.webp')} style={styles.profileImage} />
      </View>
          <View style={styles.postsSection}>
            <Text style={styles.sectionTitle}>Posts</Text>
          </View>
          <ScrollView style={styles.postsContainer}>
          <FlatList 
        data={eventData} 
        renderItem={({ item, index }: any) => (
          <PostCard Category={item.Category} Date={item.Date} Location={item.Location} Position={item.Position} Requirement={item.Requirement} watch Report={false} handleApply={() => Alert.alert('Under Maintenance')} handleDelete={handleDelete} popOverRef={popOverRef}/>
        )}
        />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: `${colors.gold}`,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginRight: 20,
  },
  profileName: {
    color: `${colors.black}`,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileOccupation: {
    color: `${colors.black}`,
    fontSize: 16,
    opacity: 0.8,
    lineHeight: 22,
  },
  profileImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
  },
  postsContainer: {
    padding: 20,
  },
  postsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: `${colors.black}`,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'space-between',
  },
  buttonContainer:{
    alignItems: 'flex-end',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  postDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default Profile;
