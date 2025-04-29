import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UniversityCollegeSearch from './Screens/UniversityCollegeSearch';
import FormFillingGuidence from './Screens/FormFillingGuidence';
import CollegeInsights from './Screens/CollegeInsights';
import ReminderandSupport from './Screens/ReminderandSupport';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import SplashScreen from './Screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="SplashScreen" component={SplashScreen}  options={{ headerShown: false }} />
        <Stack.Screen  name="UniversityCollegeSearch" component={UniversityCollegeSearch}  options={{ headerShown: false }} />
        <Stack.Screen  name="FormFillingGuidence" component={FormFillingGuidence}  options={{ headerShown: false }} />
        <Stack.Screen  name="CollegeInsights" component={CollegeInsights}  options={{ headerShown: false }} />
        <Stack.Screen  name="ReminderandSupport" component={ReminderandSupport}  options={{ headerShown: false }} />
        <Stack.Screen  name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen  name="SignUp" component={SignUp}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
