// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = ({navigation}) => {

  return (

    <View style={{ justifyContent: 'flex-end', paddingBottom: 10, borderTopWidth:0.3, borderTopColor:'#c6eaff', backgroundColor:'red'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffff', paddingHorizontal: 50,}}>  
             <TouchableOpacity  onPress={() => navigation.navigate('Hometab')} >
                <AntDesign name="search1" size={20} color="#A7A2A2" />
                <Text>hfgrjik</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Hometab')} >
                <AntDesign name="search1" size={20} color="#A7A2A2" />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Hometab')} >
                <AntDesign name="search1" size={20} color="#A7A2A2" />
            </TouchableOpacity>
        </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Footer;
