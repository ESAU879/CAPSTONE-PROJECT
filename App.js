import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './screens/login/LoginScreen';
import RegistrationScreen from './screens/registration/RegistrationScreen';
import TabNavigation from './screens/navigation/TabNavigation';
import { RoomScreen } from './screens/rooms/Index';
import { PaymentScreen } from './screens/payment/Index';
import AddTenantScreen from './screens/add/AddTenantScreen';
import AddRoomScreen from './screens/add/AddRoomScreen';
import AddPaymentScreen from './screens/add/AddPaymentScreen'
import EditTenantScreen from './screens/edit/EditTenantScreen'
import EditRoomScreen from './screens/edit/EditRoomScreen'
import EditPaymentScreen from './screens/edit/EditPaymentScreen'
import NotificationScreen from './screens/topbar/NotificationScreen'
import Settings from './screens/topbar/Settings'
import HomeScreen from './screens/home/HomeScreen';

const Stack = createStackNavigator();


  const App = () => {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8F4EB" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
            <Stack.Screen name="Rooms" component={RoomScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="AddTenant" component={AddTenantScreen} />
            <Stack.Screen name="AddRoom" component={AddRoomScreen} />
            <Stack.Screen name="AddPayment" component={AddPaymentScreen} />
            <Stack.Screen name="EditTenant" component={EditTenantScreen} />
            <Stack.Screen name="EditRoom" component={EditRoomScreen} />
            <Stack.Screen name="EditPayment" component={EditPaymentScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Settings" component={Settings} />
            
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  };

export default App;