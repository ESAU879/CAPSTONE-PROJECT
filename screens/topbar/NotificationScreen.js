import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = ({ navigation }) => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const tenants = [
    { id: 1, name: 'Fulano Fulano', room: 'Room 1', date: '01/10/2024' },
    { id: 2, name: 'Beltrano', room: 'Room 2', date: '01/01/2024' },
  ];

  const toggleSelectTenant = (tenantId) => {
    setSelectedTenant(tenantId);
  };

  const saveHandler = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Unpaid Tenants</Text>
        {tenants.map((tenant) => (
          <View key={tenant.id} style={styles.tenantContainer}>
            <TouchableOpacity onPress={() => toggleSelectTenant(tenant.id)} style={styles.tenantInfo}>
              <View style={styles.tenantLeft}>
                <Ionicons
                  name={selectedTenant === tenant.id ? 'checkmark-circle' : 'ellipse-outline'}
                  size={24}
                  color={selectedTenant === tenant.id ? 'green' : 'gray'}
                />
                <View style={styles.tenantDetails}>
                  <Text style={styles.tenantName}>{tenant.name}</Text>
                  <Text style={styles.tenantRoom}>{tenant.room}</Text>
                </View>
              </View>
              <Text style={styles.tenantDate}>{tenant.date}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={saveHandler}>
          <Text style={styles.sendButtonText}>Send</Text>
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
            <Image source={require('../../assets/green.png')} style={styles.checkImage} />
            <Text style={styles.modalSuccessText}>Sent</Text>
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
  scrollViewContent: {
    padding: 20,
    paddingBottom: 100, // Add extra padding at the bottom to accommodate the buttons
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
  },
  tenantContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  tenantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tenantLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tenantDetails: {
    marginLeft: 10,
  },
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tenantRoom: {
    fontSize: 14,
    color: '#666',
  },
  tenantDate: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginRight: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sendButton: {
    flex: 1,
    backgroundColor: '#38b000',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
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
    width: 90,
    height: 50,
    marginBottom: 20,
  },
  modalSuccessText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  modalButton: {
    width: '50%',
    backgroundColor: '#38b000',
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

export default NotificationScreen;
