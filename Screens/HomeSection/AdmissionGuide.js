// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../Header';

const AdmissionGuide = ({navigation}) => {

  return (
<SafeAreaView style={styles.container}>
    <ScrollView>

        {/* header */}
        <Header/>


        {/* body contained */}

        <View style={{paddingHorizontal:20, paddingVertical:20, gap:25}} >
            <Text style={{textAlign:'center', fontSize:22, color:'#000000',fontWeight:'bold'}}>Admission Guide</Text>
            <View style={{width:"100%", backgroundColor:"#D9D9D9",height:200,borderRadius:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{textAlign:'center', fontSize:14, color:'#000000',fontWeight:'bold'}}>Video</Text>
            </View>
            <Text style={{textAlign:'center', fontSize:17, color:'#000000',fontWeight:'bold'}}>Step to visit</Text>
            <View style={{paddingHorizontal:10,gap:10}}>
                <Text style={styles.admisiiontext}>Step 1 :</Text>
                <Text style={styles.admisiiontext}>1. Visit our Website www.sppu.com</Text>
                <Text style={styles.admisiiontext}>2. Select Program (B.Tech, BCA,B.Com)</Text>
                <Text style={styles.admisiiontext}>3. Lorem Ipsum is simply dummy text </Text>
                <Text style={styles.admisiiontext}>Step 2 :</Text>
                <Text style={styles.admisiiontext}>1. Visit our Website www.sppu.com</Text>
                <Text style={styles.admisiiontext}>2. Select Program (B.Tech, BCA,B.Com) </Text>
                <Text style={styles.admisiiontext}>3. Lorem Ipsum is simply dummy text </Text>
                <Text style={styles.admisiiontext}>Step 3 :</Text>
                <Text style={styles.admisiiontext}>1. Visit our Website www.sppu.com</Text>
                <Text style={styles.admisiiontext}>2. Select Program (B.Tech, BCA,B.Com) </Text>
                <Text style={styles.admisiiontext}>3. Lorem Ipsum is simply dummy text </Text>
            </View>
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
  admisiiontext:{
    fontSize:14,
     color:'#000000',
     fontWeight:'bold'
  }
});

export default AdmissionGuide;
