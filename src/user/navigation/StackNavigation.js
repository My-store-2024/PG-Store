import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SplashScreen,
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  AccountScreen,
  BucketScreen,
  CreateGroupScreen,
  ForgetScreen,
  OtpScreen,
  SideMenu,

} from '../screen';
import DrawerNavigation from '../navigation/DrawerNavigation';

import resetPassword from '../screen/resetPassword';
import ProductScreen from '../screen/ProductScreen';
import OrderScreen from '../screen/OrderScreen';
import CustomerScreen from '../screen/Customer';
import PaymentScreen from '../screen/PaymentScreen';



const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="resetPassword" component={resetPassword} />
        <Stack.Screen name="SideMenu" component={SideMenu} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
