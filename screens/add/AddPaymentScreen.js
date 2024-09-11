import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Image, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const AddPaymentScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [dateOfPayment, setDateOfPayment] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfPayment;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfPayment(currentDate);
  };

  const handleSave = () => {
    // Logic to save the payment details
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
        <Text style={styles.label}>Add Payment Details</Text>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={roomNumber}
              onValueChange={(itemValue) => setRoomNumber(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Room" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
            </Picker>
          </View>

          <View style={[styles.pickerContainer, styles.marginLeft]}>
            <Picker
              selectedValue={bedNumber}
              onValueChange={(itemValue) => setBedNumber(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Bed" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[styles.datePicker, styles.marginLeft]}>
            <Text style={styles.datePickerText}>
              {dateOfPayment.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dateOfPayment}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={pickImage} style={styles.imageUpload}>
            <Text style={styles.imageUploadText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        {image && (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        )}
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
    marginBottom: 20,
  },
  pickerContainer: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    height: 60,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
  },
  marginLeft: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  halfInput: {
    maxWidth: 190
  },
  datePicker: {
    flex: 1,
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 16,
    color: '#333',
  },
  imageUpload: {
    flex: 1,
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  imageUploadText: {
    fontSize: 16,
    color: '#333',
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 15,
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
    width: "50%",
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

export default AddPaymentScreen;
