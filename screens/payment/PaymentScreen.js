import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TenantScreen = ({ navigation }) => {
  const [tenants, setTenants] = useState([
    { id: '1', name: 'Fulano Fulano', room: 'Room 1', date: '01/10/2024' },
    { id: '2', name: 'Beltrano', room: 'Room 2', date: '01/01/2024' },
  ]);

  const handleDelete = (id) => {
    setTenants(tenants.filter(tenant => tenant.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.tenantItem}>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.tenantName}>{item.name}</Text>
          <Text style={styles.paymentDate}>{item.date}</Text>
        </View>
        <Text style={styles.tenantRoom}>{item.room}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate('EditPayment', { tenant: item })} style={styles.actionButton}>
          <Icon name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={[styles.actionButton, styles.deleteButton]}>
          <Icon name="trash" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Payment History</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPayment')}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tenants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D6',
    padding: 20,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#8A2BE2',
    borderRadius: 50,
    padding: 10,
  },
  tenantItem: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tenantRoom: {
    fontSize: 14,
    color: '#888',
  },
  paymentDate: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#38b000',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default TenantScreen;
