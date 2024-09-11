import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed expo/vector-icons

const SettingsScreen = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(previousState => !previousState);
    // Add your theme change logic here
  };

  const handleHelpPress = () => {
    // Add your help action here
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={[styles.container, isDarkTheme && styles.darkBackground]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Setting</Text>
        <View style={styles.settingContainer}>
          <View style={styles.settingOption}>
            <Ionicons name="moon" size={24} color="#000" />
            <Text style={styles.settingText}>Theme</Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme}
              thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
            />
          </View>
          <TouchableOpacity onPress={handleHelpPress} style={styles.settingOption}>
            <Ionicons name="help-circle-outline" size={24} color="#000" />
            <Text style={styles.settingText}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 16,
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8A2BE2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#000',
  },
  settingContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  settingText: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    marginLeft: 16,
  },
});

export default SettingsScreen;
