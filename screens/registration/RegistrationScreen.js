import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editIconText}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Register</Text>
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="First Name" />
          <TextInput style={[styles.input, styles.halfInput, styles.lastNameInput]} placeholder="Last Name" />
        </View>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Birthday" />
          <TextInput style={[styles.input, styles.halfInput, styles.lastNameInput]} placeholder="Phone No." />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D6',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF7D6',
    paddingTop: 50,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70, // Adjusted to move the profile picture down
  },
  editIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconText: {
    fontSize: 16,
    color: '#8A2BE2',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 70,
    marginTop: -50, // Ensures form container overlaps profile picture
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
