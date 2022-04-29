import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const StackApp = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export default function App() {
  return (
    <NavigationContainer>
    <StackApp.Navigator>
    <StackApp.Screen
    name="Login"
    component={Login}
    />
    </StackApp.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});