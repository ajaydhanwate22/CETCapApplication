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
import SplashScreen from './Screens/SplashScreen';
import Hometab from './Screens/HomeSection/Hometab';
import Helptab from './Screens/HelpSection/Helptab';
import Profiletab from './Screens/ProfileSection/Profiletab';
import Notifications from './Screens/Notifications';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Hometab" component={Hometab} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      {/* <HomeStack.Screen name="CapRound" component={CapRound} />
      <HomeStack.Screen name="AdmissionGuide" component={AdmissionGuide} />
      <HomeStack.Screen name="CapFormDetails" component={CapFormDetails} />
      <HomeStack.Screen name="DocumentSubmission" component={DocumentSubmission} /> */}
    </HomeStack.Navigator>
  );
}


// Bottom Tabs with icons and labels
function BottomTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Profile') {
            return <FontAwesome6 name="user" size={25} color={color} />;
          } else if (route.name === 'Home') {
            return <Entypo name="home" size={25} color={color} />;
          } else if (route.name === 'Help') {
            return <AntDesign name="android1" size={25} color={color} />;
          }
        },

        tabBarLabel: ({ focused }) => {
          return (
            <Text style={{ color: '#7A7777', fontSize: 12, top:2 }}>
              {route.name}
            </Text>
          );
        },
        
        tabBarActiveTintColor: '#E30CF7',
        tabBarInactiveTintColor: '#E30CF7',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff', // Background color for the tab bar
          height: 90,               // Height of the tab bar
          paddingBottom: 10,         // Padding at the bottom for better spacing
          paddingTop:10,
          borderTopColor: '#000000',
          borderTopWidth: 1.5, 
          elevation: 3, // Android shadow off
          shadowColor: 'transparent', // iOS shadow off
        },
        tabBarIconStyle: {
          size: 35,                  // Increase the size of the icons
        },
      })}
    >
      <Tab.Screen name="Help" component={Helptab} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={Profiletab} />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="SplashScreen" component={SplashScreen}  options={{ headerShown: false }} />
        <Stack.Screen  name="UniversityCollegeSearch" component={UniversityCollegeSearch}  options={{ headerShown: false }} />
        <Stack.Screen  name="FormFillingGuidence" component={FormFillingGuidence}  options={{ headerShown: false }} />
        <Stack.Screen  name="CollegeInsights" component={CollegeInsights}  options={{ headerShown: false }} />
        <Stack.Screen  name="ReminderandSupport" component={ReminderandSupport}  options={{ headerShown: false }} />
        <Stack.Screen  name="BottomTabs" component={BottomTabs}  options={{ headerShown: false }} />
        <Stack.Screen  name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen  name="SignUp" component={SignUp}  options={{ headerShown: false }} />
        <Stack.Screen  name="Notifications" component={Notifications}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
