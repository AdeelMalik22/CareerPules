import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';


export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation() 
  const handleSignup = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name === '' ||  email === '' || password === ''){
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Enter Filed',
        position: 'top',
        visibilityTime: 3000,
      })
    }else if(password.length < 6){
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Password must be at least 6 characters',
        position: 'top',
        visibilityTime: 3000,
      })
    }else if(reg.test(email )=== false){
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Enter Valid Email',
        position: 'top',
        visibilityTime: 3000,
      })
    }else{
      setOtpModalVisible(true)
    }
  };
const handleOtpSubmit = () => {
  
  const otpOutPut = "123456"
  if (otp === otpOutPut){
    setOtpModalVisible(false)
    setOtp("")
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'OTP verified successfully',
      position: 'top',
      visibilityTime: 3000,
    });
    // navigation.navigate("Login")
   }else if (otp !== otpOutPut){
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Please Enter Correct OTP',
      position: 'top',
      visibilityTime: 3000,
    })
   }else{
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Please enter OTP',
      position: 'top',
      visibilityTime: 3000,
    })
  }
   

}
console.log("otp",otp)
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

      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <Modal visible={otpModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>OTP Authentication</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              keyboardType="numeric"
              onChangeText={setOtp}
              maxLength={6}
            />
            <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Verify OTP</Text>}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
    color: '#333',

    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
