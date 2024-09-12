import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig'; // Import the `auth` object from your Firebase config

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(''); // Add state to capture email input
  const [password, setPassword] = useState(''); // Add state to capture password input

  const handleLogin = async () => {
    try {
      // Sign in the user using email and password with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      
      // Navigate to the home screen after a successful login
      navigation.replace('Tab');
    } catch (error) {
      // Handle authentication errors
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="admin@email.com"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
          value={email} // Link the state with TextInput for email
          onChangeText={setEmail} // Update email state on change
        />
        <TextInput
          style={styles.input}
          placeholder="***"
          secureTextEntry
          placeholderTextColor="#aaa"
          value={password} // Link the state with TextInput for password
          onChangeText={setPassword} // Update password state on change
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../../assets/google.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  loginContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 40,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 55,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  linkText: {
    color: '#8A2BE2',
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#8A2BE2',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#aaa',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: 'center',
  },
  googleIcon: {
    width: 50,
    height: 50,
    marginRight: 0,
  },
  googleButtonText: {
    fontSize: 18,
  },
});

export default LoginScreen;
