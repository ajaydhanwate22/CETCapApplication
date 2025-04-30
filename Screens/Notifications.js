// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

const Notifications = ({navigation}) => {

  return (
<SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* header */}
        <Header/>

        {/* body Contained */}

        <View style={{justifyContent:'center', alignItems:'center', flex:1, gap:20, paddingHorizontal:60}}>
            <FontAwesome name="bell-o" size={40} color="#A7A2A2" />
            <Text style={{textAlign:'center', fontSize:24, color:'#000000',fontWeight:'bold'}}>No Notification</Text>
            <Text style={{textAlign:'center', fontSize:15, color:'#B5B1B1',fontWeight:'bold'}}>We’ll let you know when there will be something to update you</Text>
        </View>
        
  </ScrollView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Notifications;
