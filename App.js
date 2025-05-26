import React from 'react';
import { StyleSheet , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UniversityCollegeSearch from './Screens/UniversityCollegeSearch';
import FormFillingGuidence from './Screens/FormFillingGuidence';
import CollegeInsights from './Screens/CollegeInsights';
import ReminderandSupport from './Screens/ReminderandSupport';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Hometab from './Screens/HomeSection/Hometab';
import Helptab from './Screens/HelpSection/Helptab';
import Profiletab from './Screens/ProfileSection/Profiletab';
import Notifications from './Screens/Notifications';
import EditProfileTab from './Screens/ProfileSection/EditProfileTab';
import CapGuide from './Screens/HomeSection/CapGuide';
import AdmissionGuide from './Screens/HomeSection/AdmissionGuide';
import Documentneed from './Screens/HomeSection/Documentneed';
// import SplashScreen from './Screens/SplashScreen';
import CollegeFilter from './Screens/HomeSection/CollegeFilter';
import CollegeComparison from './Screens/HomeSection/CollegeComparison';
import CollegeSearch from './Screens/CollegeSearch';

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
        <Stack.Screen  name="Helptab" component={Helptab}  options={{ headerShown: false }} />
        <Stack.Screen  name="Hometab" component={Hometab}  options={{ headerShown: false }} />
        <Stack.Screen  name="Profiletab" component={Profiletab}  options={{ headerShown: false }} />
        <Stack.Screen  name="CollegeFilter" component={CollegeFilter}  options={{ headerShown: false }} />
        <Stack.Screen  name="CollegeComparison" component={CollegeComparison}  options={{ headerShown: false }} />
        <Stack.Screen  name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen  name="SignUp" component={SignUp}  options={{ headerShown: false }} />
        <Stack.Screen  name="Notifications" component={Notifications}  options={{ headerShown: false }} />
        <Stack.Screen  name="EditProfile" component={EditProfileTab}  options={{ headerShown: false }} />
        <Stack.Screen  name="CapGuide" component={CapGuide}  options={{ headerShown: false }} />
        <Stack.Screen  name="AdmissionGuide" component={AdmissionGuide}  options={{ headerShown: false }} />
        <Stack.Screen  name="Documentneed" component={Documentneed}  options={{ headerShown: false }} />
        <Stack.Screen  name="CollegeSearch" component={CollegeSearch}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
