// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

    const navigation = useNavigation();

  return (
<SafeAreaView style={styles.container}>
    <ScrollView>

        {/* header */}
        <View style={{paddingTop:40, paddingHorizontal:20, borderBottomWidth:0.3, borderBottomColor:"#000000", paddingBottom:20, elevation:1}}>
            <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:"center"}}>
                    {/* <Image source={require('../../Assets/images/universitylogo.png')} style={{height: 50, width:"50%"}}/> */}
                    <TouchableOpacity style={{ borderColor: "#F8F2F2", borderWidth: 1.5, width: 50,  height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", }}  onPress={() => navigation.goBack()} >
                    <Entypo name="chevron-left" size={20} color="#A7A2A2" />
                    </TouchableOpacity>
                    <Text style={{fontSize:24, color:"#00000", fontWeight:'bold'}}>Logo <Text style={{fontSize:24, color:"#E30CF7", fontWeight:'bold'}}>text</Text></Text>
                <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center'}}>    
                    <TouchableOpacity style={{ borderColor: "#F8F2F2", borderWidth: 1.5, width: 50,  height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", }}>
                    <AntDesign name="search1" size={20} color="#A7A2A2" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: "#F8F2F2", borderWidth: 1.5, width: 50,  height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", }}>
                    <FontAwesome name="bell" size={20} color="#A7A2A2" />
                    </TouchableOpacity>
                </View>
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
});

export default Header;
