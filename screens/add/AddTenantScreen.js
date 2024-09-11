import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const RegistrationScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [roomNumber, setRoomNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSave = () => {
    // Logic to save the registration details
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Tenant Information</Text>
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="First Name" />
          <TextInput style={[styles.input, styles.halfInput, styles.lastNameInput]} placeholder="Last Name" />
        </View>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Address" />
        <View style={styles.row}>
          <TouchableOpacity style={[styles.input, styles.halfInput]} onPress={showDatepicker}>
            <Text style={styles.dateText}>{date.toDateString()}</Text>
          </TouchableOpacity>
          <TextInput style={[styles.input, styles.halfInput, styles.lastNameInput]} placeholder="Phone No." />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={roomNumber}
            onValueChange={(itemValue) => setRoomNumber(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Room No." value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="3" />
            {/* Add more room numbers as needed */}
          </Picker>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 50,
    marginTop: 40,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
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
    justifyContent: 'center',
  },
  halfInput: {
    flex: 1,
  },
  lastNameInput: {
    marginLeft: 10,
  },
  dateText: {
    color: '#333',
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    height: 60,
    justifyContent: 'center',
  },
  picker: {
    height: 10,
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
    color: '#16325B',
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#16325B',
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
    color: '#16325B',
    marginBottom: 20,
  },
  modalButton: {
    width: "50%",
    backgroundColor: '#16325B',
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

export default RegistrationScreen;
