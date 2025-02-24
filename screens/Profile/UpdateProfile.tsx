import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Image 
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../../components/Header';
import { colors } from '../../utils/Colors';

function UpdateProfile() {
  const [image, setImage] = useState(null);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
        console.log("response",response)
      if (response.assets && response.assets.length > 0) {
        console.log("response.assets[0].uri",response.assets[0].uri)
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <>
      <Header profile={true} notification back />
      <View style={styles.container}>
        {/* Image Upload Section */}
        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#888" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Current Position" placeholderTextColor="#888" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Job Category" placeholderTextColor="#888" />
        </View>
        <View style={styles.ImageContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={selectImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.uploadText}>Upload Image</Text>
          )}
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: "100%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  uploadText: {
    color: '#888',
    fontSize: 14,
  },
  ImageContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gold,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gold,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 3,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    marginLeft: 10,
  },
});
