import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import TenantScreen from '../tenant/TenantScreen';
import RoomScreen from '../rooms/RoomScreen'; // Ensure the import path is correct
import PaymentScreen from '../payment/PaymentScreen'; // Ensure the import path is correct
import { Ionicons } from '@expo/vector-icons'; // Import icons from your preferred library

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Tenant') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Rooms') {
              iconName = focused ? 'bed' : 'bed-outline';
            } else if (route.name === 'Payment') {
              iconName = focused ? 'card' : 'card-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#16325B',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
            paddingBottom: 10,
            paddingTop: 10,
            height: 80,
            borderTopLeftRadius: 30, // Add border radius for curves
            borderTopRightRadius: 30, // Add border radius for curves
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderTopWidth: 0, // Remove top border
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray', // Default color for the label
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> 
        <Tab.Screen name="Tenant" component={TenantScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Rooms" component={RoomScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    
  );
}
