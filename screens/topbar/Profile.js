import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  const { name, role, email, phone, birthday } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={require('../../assets/edit.png')} style={styles.editIconImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Profile</Text>
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="First Name" value={name.split(' ')[0]} />
          <TextInput style={[styles.input, styles.halfInput, styles.lastNameInput]} placeholder="Last Name" value={name.split(' ')[1]} />
        </View>
        <TextInput style={styles.input} placeholder="E-mail" value={email} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Role" value={role} />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Birthday" value={birthday} />
          <TextInput style={[styles.input, styles.halfInput, styles.lastNameInput]} placeholder="Phone No." value={phone} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image source={require('../../assets/check.png')} style={styles.checkImage} />
            <Text style={styles.modalSuccessText}>Success</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingTop: 100,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  editIconImage: {
    width: 20,
    height: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 70,
    marginTop: 20,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
  },
  checkImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalSuccessText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 20,
  },
  modalButton: {
    width: '50%',
    backgroundColor: '#8A2BE2',
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
    height: 50,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
