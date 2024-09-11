import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RoomScreen = ({ navigation }) => {
  const [rooms, setRooms] = useState([
    { id: '1', name: 'Room 1', beds: 3, price: '1,000 mthly', occupancy: '1/3 Person' },
    { id: '2', name: 'Room 2', beds: 4, price: '1,000 mthly', occupancy: '0/4 Person' },
    { id: '3', name: 'Room 3', beds: 3, price: '1,000 mthly', occupancy: '0/3 Person' },
    { id: '4', name: 'Room 4', beds: 4, price: '1,000 mthly', occupancy: '0/4 Person' },
  ]);

  const handleEdit = (room) => {
    navigation.navigate('EditRoom', { room });
  };

  const handleDelete = (id) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.roomItem}>
      <View style={styles.roomInfo}>
        <View style={styles.roomRow}>
          <Text style={styles.roomName}>{item.name}</Text>
          <Text style={styles.roomDetails}>{item.price}</Text>
        </View>
        <View style={styles.roomRow}>
          <Text style={styles.roomDetails}>{item.beds} Beds</Text>
          <Text style={styles.roomDetails}>{item.occupancy}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionButton}>
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
        <Text style={styles.title}>Room Management</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddRoom')}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={rooms}
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
  roomItem: {
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
  roomInfo: {
    flex: 1,
  },
  roomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomDetails: {
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
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    padding: 10,
  },
});

export default RoomScreen;
