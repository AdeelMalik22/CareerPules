import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem } from '../../utils/Function';
import { loginUser } from '../../api/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEnterprise, setShowEnterprise] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    // setShowEnterprise(true);
    handleLogin1()
  };

const handleLogin1 = async () => {
  const payload = {
    "email": email,
    "password": password,
  };

  try {
      await loginUser(payload as any).then(async(res) => {
        const token = res.data.access
        await AsyncStorage.setItem("token", token)
      });
  } catch (error) {
      console.log("Login error: ", error);
  }
}


  const handleSignupGo = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.logoText}>Career Pulse</Text>
      </View>
      <View style={styles.bottomSection}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.loginContainer}>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.subtitle}>Enter your details below</Text>

              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={text => setEmail(text)}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
              />

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>

              <Text style={styles.orText}>Or sign in with</Text>

              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  {/* <Image source={require('../Images/google.png')} style={styles.socialIcon} /> */}
                  <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  {/* <Image source={require('../Images/fb.png')} style={styles.socialIcon} /> */}
                  {/* <Ionicons name='logo-facebook' /> */}
                  <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignupGo}>
                  <Text style={styles.signupLink}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
          {/* )} */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  topSection: {
    flex: 3,
    backgroundColor: `${colors.gold}`,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bottomSection: {
    flex: 8,
    backgroundColor: `${colors.white}`,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: `${colors.black}`,
  },
  loginContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: `${colors.black}`,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: `${colors.gold}`,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 3,
  },
  loginButton: {
    backgroundColor: `${colors.gold}`,
    paddingVertical: 15,
    borderRadius: 25,
    width: '50%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 3,
  },
  loginButtonText: {
    color: `${colors.black}`,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: `${colors.black}`,
    fontSize: 14,
    marginBottom: 20,
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: `${colors.gold}`,
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: `${colors.black}`,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#666',
    marginRight: 5,
  },
  signupLink: {
    color: `${colors.black}`,
    fontWeight: 'bold',
  },
  enterpriseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterpriseImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  enterpriseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: `${colors.black}`,
    marginBottom: 10,
  },
  enterpriseDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: `${colors.gold}`,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  getStartedText: {
    color: `${colors.black}`,
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresList: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  featureText: {
    fontSize: 16,
    color: `${colors.black}`,
    marginBottom: 10,
    textAlign: 'left',
  },
  featureTextCheckMark: {
    fontSize: 16,
    color: `${colors.gold}`,
    marginBottom: 10,
    textAlign: 'left',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default Login;
