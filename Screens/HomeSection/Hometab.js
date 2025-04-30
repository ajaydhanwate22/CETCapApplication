// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Hometab = ({navigation}) => {

  return (
<SafeAreaView style={styles.container}>
    <ScrollView>

        {/* header */}
        <View style={{paddingTop:40, paddingHorizontal:20, borderBottomWidth:0.3, borderBottomColor:"#000000", paddingBottom:20}}>
            <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:"center"}}>
                    {/* <Image source={require('../../Assets/images/universitylogo.png')} style={{height: 50, width:"50%"}}/> */}
                    <Text style={{fontSize:24, color:"#00000", fontWeight:'bold'}}>Logo <Text style={{fontSize:24, color:"#E30CF7", fontWeight:'bold'}}>text</Text></Text>
                <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center'}}>    
                    <TouchableOpacity style={{ borderColor: "#F8F2F2", borderWidth: 1.5, width: 50,  height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", }}>
                    <AntDesign name="search1" size={20} color="#A7A2A2" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: "#F8F2F2", borderWidth: 1.5, width: 50,  height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", }}  onPress={() => navigation.navigate('Notifications')}>
                    <FontAwesome name="bell" size={20} color="#A7A2A2" />   
                    </TouchableOpacity>
                </View>
            </View>
        </View>


        {/* body contained */}

        <View style={{paddingHorizontal:20, paddingVertical:40}} >
            <View style={{width:'100%',justifyContent:'space-between', alignItems:'center', flexDirection:'row',paddingVertical:10}}>
                <TouchableOpacity style={{width:"47%",height:200, backgroundColor:'#E700FD40', alignItems:"center", justifyContent:'center', borderRadius:10,padding:20}}>
                    <Text style={{fontSize:18, color:"#00000", fontWeight:'bold'}}>Campus</Text>
                    <Text style={{fontSize:18, color:"#00000", fontWeight:'bold'}}>Unlocked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"47%",height:200, backgroundColor:'#E700FD40', alignItems:"center", justifyContent:'center', borderRadius:10,padding:20}}>
                <Text style={{fontSize:18, color:"#00000", fontWeight:'bold',textAlign:'center'}}>Filter</Text>
                <Text style={{fontSize:18, color:"#00000", fontWeight:'bold',textAlign:'center'}}>Collages</Text>
                </TouchableOpacity>
            </View>

            <View style={{width:'100%',justifyContent:'space-between', alignItems:'center', flexDirection:'row',paddingVertical:10}}>
                <TouchableOpacity style={{width:"47%",height:200, backgroundColor:'#E700FD40', alignItems:"center", justifyContent:'center', borderRadius:10,padding:20}} onPress={() => navigation.navigate('CapGuide')} > 
                    <Text style={{fontSize:18, color:"#00000", fontWeight:'bold',textAlign:'center'}}>CAP Guide</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"47%",height:200, backgroundColor:'#E700FD40', alignItems:"center", justifyContent:'center', borderRadius:10, padding:20}}  onPress={() => navigation.navigate('Documentneed')}>
                <Text style={{fontSize:18, color:"#00000", fontWeight:'bold', textAlign:'center'}}>Document you need</Text>
                </TouchableOpacity>
            </View>

            <View style={{width:'100%',justifyContent:'space-between', alignItems:'center', flexDirection:'row',paddingVertical:10}}>
                <TouchableOpacity style={{width:"47%",height:200, backgroundColor:'#E700FD40', alignItems:"center", justifyContent:'center', borderRadius:10,padding:20}} onPress={() => navigation.navigate('AdmissionGuide')}>
                    <Text style={{fontSize:18, color:"#00000", fontWeight:'bold',textAlign:'center'}}>Admission Guide</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{width:"47%",height:200, backgroundColor:'#E700FD40', alignItems:"center", justifyContent:'center', borderRadius:10, padding:20}}>
                <Text style={{fontSize:18, color:"#00000", fontWeight:'bold', textAlign:'center'}}>Document you need</Text>
                </TouchableOpacity> */}
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
  }
});

export default Hometab;
