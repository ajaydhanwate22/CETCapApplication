// ./components/Footer.js

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Footer = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Helptab')} style={styles.iconContainer}>
        <AntDesign name="android1" size={24} color="#E30CF7" />
        <Text style={styles.label}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Hometab')} style={styles.iconContainer}>
        <Entypo name="home" size={24} color="#E30CF7" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profiletab')} style={styles.iconContainer}>
        <FontAwesome6 name="user" size={24} color="#E30CF7" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',  height: 90, backgroundColor: '#fff',borderTopColor: '#000000',borderTopWidth: 0.3,paddingBottom: 20,paddingTop: 10,},
  iconContainer: {
    alignItems: 'center'},
  label: {fontSize: 12, color: '#7A7777',marginTop: 4},
});

export default Footer;
