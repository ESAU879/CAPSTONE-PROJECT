import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../FirebaseConfig'; // Import the `auth` object

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    if (firstName && lastName && email && password && phone) {
      try {
        // Create a new user with email and password using Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Optionally update the user's display name
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });

        Alert.alert('Registration Successful', 'User has been registered successfully');
        navigation.navigate('Login'); // Navigate to the home screen or login screen
      } catch (error) {
        Alert.alert('Registration Failed', error.message);
      }
    } else {
      Alert.alert('Missing Fields', 'Please fill in all fields');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Positioned logo in front of the form container */}
          <Image
            source={require('../../assets/logo.png')} // Adjust path according to your project structure
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.formContainer}>
            <Text style={styles.label}>Register</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={[styles.input, styles.halfInput, styles.lastNameInput]}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone No."
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D6',
  },
  // Positioning the logo above the form
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 30, // Adjust the value as needed to fit your design
    alignSelf: 'center', // Centers the logo horizontally
    zIndex: 1, // Ensures logo is above the form
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 70, // Adding extra padding to prevent overlap with the logo
    marginTop: 200,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  halfInput: {
    flex: 1,
  },
  lastNameInput: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#8A2BE2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
