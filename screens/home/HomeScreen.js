import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, SafeAreaView, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you are using expo

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleProfilePress = () => {
    setModalVisible(true);
  };

  const handleLogoutPress = () => {
    setModalVisible(false);
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleProfilePress} style={styles.profileContainer}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={styles.profileImage}
            />
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Fulano</Text>
              <Text style={styles.profileRole}>Administrator</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Notification')}>
              <FontAwesome name="bell" size={24} color='#16325B' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Settings')}>
              <FontAwesome name="cog" size={24} color='#16325B' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.homeText}>Home</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/4.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>4 Rooms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/1.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>15 Beds</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/3.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>2 Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/2.png')} style={styles.cardIcon} />
            <Text style={styles.cardText}>2 Tenant</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate('Profile')}
              style={styles.modalOption}
              underlayColor="#f0f0f0"
            >
              <View style={styles.modalOptionContent}>
                <FontAwesome name="user" size={24} color="#000" />
                <Text style={styles.modalText}>Profile</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={handleLogoutPress}
              style={styles.modalOption}
              underlayColor="#f0f0f0"
            >
              <View style={styles.modalOptionContent}>
                <FontAwesome name="sign-out" size={24} color="#000" />
                <Text style={styles.modalText}>Log out</Text>
              </View>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF7D6',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: 14,
    color: '#777',
  },
  headerIcons: {
    flexDirection: 'row',
    color: '#8A2BE2',
  },
  iconButton: {
    marginLeft: 15,
    color: '#8A2BE2',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
  homeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 110, // Adjust this value to move the text lower
    marginBottom: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 30,
  },
  card: {
    backgroundColor: '#16325B',
    width: '40%',
    padding: 7,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 80, // Adjust this value to move the modal to the right position
    paddingLeft: 20, // Align with profile image
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  modalOption: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  modalOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginLeft: 16,
    color: '#000',
  },
});

export default HomeScreen;
