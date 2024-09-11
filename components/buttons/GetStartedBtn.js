import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GetStartedBtn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default GetStartedBtn;