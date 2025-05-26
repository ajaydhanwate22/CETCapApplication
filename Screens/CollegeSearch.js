// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React , { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from './Header';
import Footer from './Footer';


const CollegeSearch = ({navigation}) => {

  return (
<SafeAreaView style={styles.container}>
    <Header/>
     <ScrollView>
        <View style={{paddingHorizontal:20, paddingVertical:20, justifyContent:'center', alignItems:"center", marginTop:15, gap:20}} >
            <View style={{flexDirection: 'row',width: '100%',alignItems: 'center',justifyContent:'space-between'}}>
                <TextInput placeholder="Enter College 1 ..." style={{width: '48%', borderWidth: 1, borderColor: '#EBEBEB', borderRadius: 10, paddingHorizontal: 10, height: 45,marginRight: 3, fontSize: 12, }}  placeholderTextColor="#807E7E" />
                <TextInput placeholder="Enter College 2 ..." style={{width: '48%', borderWidth: 1, borderColor: '#EBEBEB', borderRadius: 10, paddingHorizontal: 10, height: 45,marginRight: 3, fontSize: 12, }}  placeholderTextColor="#807E7E" />
            </View>
            <View style={{width: '100%',alignItems: 'center',justifyContent:'center', paddingHorizontal:40, }}>
              <TouchableOpacity style={{paddingVertical:14,backgroundColor:"#F200FF",width:'70%',alignItems: 'center',justifyContent:'center',borderRadius:10}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#FFFFFF", textAlign:'center' }}>Search Collage</Text>  
              </TouchableOpacity>
            </View>

            <View style={{marginVertical:10, gap:10}}>
              <View style={{flexDirection:'row', justifyContent:'space-between',width:"100%"}}>
                  <View style={{borderRadius:15, borderWidth:1, borderColor:'#EBE9E9',width:'48%', padding:10}}>
                      <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{marginTop:15, gap:10}}>
                        <View style={{justifyContent:"space-between", alignItems:'center',flexDirection:'row',}}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" }}>Collage Name</Text>  
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"}}>Pune</Text>  
                        </View>
                        <View style={{justifyContent:"center", alignItems:'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F" , textAlign:'left' }}>Lorem Ipsum has been the industry's standard dummy</Text>  
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:"center"}}>
                            <View style={{flexDirection:'row',gap:5}}>
                              <Entypo name="star" size={16} color="#FFD208" />
                               <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Fees: 15K</Text>
                        </View>
                        </View>
                  </View>

                  <View style={{borderRadius:15, borderWidth:1, borderColor:'#EBE9E9',width:'48%', padding:10}}>
                      <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{marginTop:15, gap:10}}>
                        <View style={{justifyContent:"space-between", alignItems:'center',flexDirection:'row',}}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" }}>Collage Name</Text>  
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"}}>Pune</Text>  
                        </View>
                        <View style={{justifyContent:"center", alignItems:'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F" , textAlign:'left' }}>Lorem Ipsum has been the industry's standard dummy</Text>  
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:"center"}}>
                            <View style={{flexDirection:'row',gap:5}}>
                              <Entypo name="star" size={16} color="#FFD208" />
                               <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Fees: 15K</Text>
                        </View>
                        </View>
                  </View>
              </View>


              <View style={{flexDirection:'row', justifyContent:'space-between',width:"100%"}}>
                  <View style={{borderRadius:15, borderWidth:1, borderColor:'#EBE9E9',width:'48%', padding:10}}>
                      <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{marginTop:15, gap:10}}>
                        <View style={{justifyContent:"space-between", alignItems:'center',flexDirection:'row',}}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" }}>Collage Name</Text>  
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"}}>Pune</Text>  
                        </View>
                        <View style={{justifyContent:"center", alignItems:'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F" , textAlign:'left' }}>Lorem Ipsum has been the industry's standard dummy</Text>  
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:"center"}}>
                            <View style={{flexDirection:'row',gap:5}}>
                              <Entypo name="star" size={16} color="#FFD208" />
                               <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Fees: 15K</Text>
                        </View>
                        </View>
                  </View>

                  <View style={{borderRadius:15, borderWidth:1, borderColor:'#EBE9E9',width:'48%', padding:10}}>
                      <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{marginTop:15, gap:10}}>
                        <View style={{justifyContent:"space-between", alignItems:'center',flexDirection:'row',}}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" }}>Collage Name</Text>  
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"}}>Pune</Text>  
                        </View>
                        <View style={{justifyContent:"center", alignItems:'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F" , textAlign:'left' }}>Lorem Ipsum has been the industry's standard dummy</Text>  
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:"center"}}>
                            <View style={{flexDirection:'row',gap:5}}>
                              <Entypo name="star" size={16} color="#FFD208" />
                               <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Fees: 15K</Text>
                        </View>
                        </View>
                  </View>
              </View>


              <View style={{flexDirection:'row', justifyContent:'space-between',width:"100%"}}>
                  <View style={{borderRadius:15, borderWidth:1, borderColor:'#EBE9E9',width:'48%', padding:10}}>
                      <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{marginTop:15, gap:10}}>
                        <View style={{justifyContent:"space-between", alignItems:'center',flexDirection:'row',}}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" }}>Collage Name</Text>  
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"}}>Pune</Text>  
                        </View>
                        <View style={{justifyContent:"center", alignItems:'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F" , textAlign:'left' }}>Lorem Ipsum has been the industry's standard dummy</Text>  
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:"center"}}>
                            <View style={{flexDirection:'row',gap:5}}>
                              <Entypo name="star" size={16} color="#FFD208" />
                               <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Fees: 15K</Text>
                        </View>
                        </View>
                  </View>

                  <View style={{borderRadius:15, borderWidth:1, borderColor:'#EBE9E9',width:'48%', padding:10}}>
                      <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{marginTop:15, gap:10}}>
                        <View style={{justifyContent:"space-between", alignItems:'center',flexDirection:'row',}}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" }}>Collage Name</Text>  
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"}}>Pune</Text>  
                        </View>
                        <View style={{justifyContent:"center", alignItems:'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F" , textAlign:'left' }}>Lorem Ipsum has been the industry's standard dummy</Text>  
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:"center"}}>
                            <View style={{flexDirection:'row',gap:5}}>
                              <Entypo name="star" size={16} color="#FFD208" />
                               <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Fees: 15K</Text>
                        </View>
                        </View>
                  </View>
              </View>

            </View>
        </View>
     </ScrollView>
  <Footer/>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff'},
});

export default CollegeSearch;
