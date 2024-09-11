import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TenantScreen = ({ navigation }) => {
  const [tenants, setTenants] = useState([
    { id: '1', firstName: 'Fulano', lastName: 'Fulano', email: 'fulano@example.com', address: '123 Street', phone: '1234567890', roomNumber: 'Room 1', dateOfBirth: '2024-01-01', status: 'paid' },
    { id: '2', firstName: 'Beltrano', lastName: '', email: 'beltrano@example.com', address: '456 Avenue', phone: '0987654321', roomNumber: 'Room 2', dateOfBirth: '2024-02-02', status: 'unpaid' },
    { id: '3', firstName: 'Ciclano', lastName: 'Silva', email: 'ciclano@example.com', address: '789 Boulevard', phone: '1112223333', roomNumber: 'Room 3', dateOfBirth: '2024-03-03', status: 'due' },
    { id: '4', firstName: 'Trilano', lastName: 'Santos', email: 'trilano@example.com', address: '999 Highway', phone: '4445556666', roomNumber: 'Room 4', dateOfBirth: '2024-04-04', status: 'due' },
    // Add more tenants here if needed
  ]);
  
  const [filteredTenants, setFilteredTenants] = useState(tenants);
  const [currentFilter, setCurrentFilter] = useState('all'); // Track the current filter

  const handleDelete = (id) => {
    const updatedTenants = tenants.filter(tenant => tenant.id !== id);
    setTenants(updatedTenants);
    setFilteredTenants(updatedTenants);  // Update both tenants and filtered list
  };

  const sortTenantsByStatus = (status) => {
    setCurrentFilter(status);
    if (status === 'all') {
      setFilteredTenants(tenants);
    } else {
      setFilteredTenants(tenants.filter(tenant => tenant.status === status));
    }
  };

  const notifyTenant = (tenant) => {
    // Logic for notifying tenant
    alert(`Notification sent to ${tenant.firstName}!`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.tenantItem}>
      <View>
        <Text style={styles.tenantName}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.tenantRoom}>{item.roomNumber}</Text>
      </View>
      <View style={styles.actions}>
        {currentFilter === 'paid' ? null : currentFilter === 'due' || currentFilter === 'unpaid' ? (
          // Show notification button for due/unpaid tenants
          <TouchableOpacity onPress={() => notifyTenant(item)} style={styles.notificationButton}>
            <Icon name="notifications" size={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          // Show edit and delete buttons for other statuses
          <>
            <TouchableOpacity onPress={() => navigation.navigate('EditTenant', { tenant: item })} style={styles.actionButton}>
              <Icon name="pencil" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={[styles.actionButton, styles.deleteButton]}>
              <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Filter Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, styles.allButton]} 
          onPress={() => sortTenantsByStatus('all')}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, styles.paidButton]} 
          onPress={() => sortTenantsByStatus('paid')}
        >
          <Text style={styles.buttonText}>Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, styles.dueButton]} 
          onPress={() => sortTenantsByStatus('due')}
        >
          <Text style={styles.buttonText}>Due</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, styles.unpaidButton]} 
          onPress={() => sortTenantsByStatus('unpaid')}
        >
          <Text style={styles.buttonText}>Unpaid</Text>
        </TouchableOpacity>
      </View>

      {/* Header with Add Button */}
      <View style={styles.header}>
        <Text style={styles.title}>Tenant Management</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTenant')}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tenant List */}
      <FlatList
        data={filteredTenants}
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
    backgroundColor: '#4CAF50',
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
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tenantRoom: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  notificationButton: {
    backgroundColor: '#FFA500', // Orange color for the notification button
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    padding: 12,
    borderRadius: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  allButton: {
    backgroundColor: '#6C63FF',
  },
  paidButton: {
    backgroundColor: '#4CAF50',
  },
  dueButton: {
    backgroundColor: '#FFA500',
  },
  unpaidButton: {
    backgroundColor: '#FF4136',
  },
});

export default TenantScreen;
