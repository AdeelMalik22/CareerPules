import React, { useState } from 'react';
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
import { colors } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { registerUser, registerUserOtp } from '../../api/auth';


export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const handleSignup = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const numberReg = /^\+[1-9]{1}[0-9]{3,14}$/
    if (name === '' || email === '' || password === '' || number === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Enter Filed',
        position: 'top',
        visibilityTime: 3000,
      })
    } else if (password.length < 8) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Password must be at least 8 characters',
        position: 'top',
        visibilityTime: 3000,
      })
    } else if (reg.test(email) === false) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Enter Valid Email',
        position: 'top',
        visibilityTime: 3000,
      })
    } else if (numberReg.test(number) === false) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Enter Valid Number',
        position: 'top',
        visibilityTime: 3000,
      })
    } else {
      try {
        const payload = {
          "email": email,
          "username": name,
          "phone_number": number,
          "password": password,
        }


        await registerUser(payload as any).then((res) => {
          if (res.status === 201) {
            setOtpModalVisible(true)
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: "Successfully Signup",
              position: 'top',
              visibilityTime: 3000,
            })
          }
        }).catch(reason => {
          const { email, username } = reason.response.data
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: email || username,
            position: 'top',
            visibilityTime: 3000,
          });
        })

      } catch (error) {
        // console.error("Error during signup ----------:", error.message);
        // Toast.show({
        //     type: 'error',
        //     text1: 'Error',
        //     text2: 'Signup Failed: ' + error.message,
        //     position: 'top',
        //     visibilityTime: 3000,
        // });
      }
    }
  };
  const handleOtpSubmit = () => {

    //  setOtpModalVisible(false)

    const otpPayload = {
      "email": email,
      "otp": otp
    }
    if (otp.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter OTP',
        position: 'top',
        visibilityTime: 3000,
      })
    } else {
      registerUserOtp(otpPayload as any).then(async (res) => {
        console.log("res.status", res.status)
        if (res.status === 200) {
          await setOtpModalVisible(false)
          setOtp("")
          setEmail("")
          setName("")
          setNumber("")
          setPassword("")
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'OTP verified successfully',
            position: 'top',
            visibilityTime: 3000,
          });
        }
      }).catch((errorRes) => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: errorRes.response.data.error,
          position: 'top',
          visibilityTime: 3000,
        })
        console.log("errrorRes", errorRes.response.data.error)
      })
    }

  }
  console.log("otp", otp)
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
        placeholder="Number with code"
        keyboardType="number-pad"
        value={number}
        onChangeText={setNumber}
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
