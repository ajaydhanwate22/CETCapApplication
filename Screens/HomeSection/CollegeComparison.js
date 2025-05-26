// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React , { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../Header';
import Footer from '../Footer';


const CollegeComparison = ({navigation}) => {

    const [isChecked, setIsChecked] = useState(false);
    const [selectedGender, setSelectedGender] = useState('Male');

  return (
<SafeAreaView style={styles.container}>
<Header/>

    <ScrollView>

        {/* header */}

        {/* body contained */}

        <View style={{paddingHorizontal:20, paddingVertical:20, justifyContent:'center', alignItems:"center"}} >
            <View style={styles.searchRow}>
            <TextInput placeholder="Search college..." style={styles.searchInput}  placeholderTextColor="#807E7E" />
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Compare</Text>
            </TouchableOpacity>
            </View>
        </View>

            {/* college 1 and collge 2 boxes */}
            
        <View style={{marginHorizontal:10, marginVertical:10, borderWidth:1, borderColor:'#B2B1B1',borderRadius:10,paddingBottom:10}}>
            <View style={{flexDirection:'row',width:"100%", justifyContent:"center"}}>
                <View style={{width:"50%"}}> 
                    <View style={{justifyContent:'center', alignItems:'center',paddingVertical:10, borderBottomWidth:1, borderBottomColor:'#B2B1B1',borderRightWidth:1,borderRightColor:'#B2B1B1'}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color:"#00000" , textAlign:'center' }}>Collage 1</Text>  
                    </View>

                    <View style={{paddingHorizontal:10,borderRightWidth:1,borderRightColor:'#B2B1B1', paddingTop:10, paddingBottom:30}}>
                            <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:10}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" , textAlign:'center' }}>Savitribai Phule Pune  University</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', alignItems:'center',marginTop:20, flexDirection:'row'}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" }}>Location :</Text>  
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656"}}>Pune</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:20}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color:"#00000" , textAlign:'center' }}>Branches Offered</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:15}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" , textAlign:'center' }}>Cutoff ( Previous Year )</Text>  
                            </View>
                            <View style={{marginTop:15}}>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>General</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>92%</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>OBC</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>82%</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>ST/SC</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>72%</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>NT</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>40%</Text>  
                            </View>
                            </View>

                            <View style={{justifyContent:'space-between', alignItems:'center',marginTop:15, flexDirection:'row'}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" }}>Collage Fees :</Text>  
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656"}}>70,0000</Text>  
                            </View>
                            
                            <View style={{marginTop:15}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" }}>Infrastructure</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:15}}>
                                <TouchableOpacity style={{width:'75%', backgroundColor:"#F263FF", padding:10, borderRadius:10, justifyContent:"center", alignItems:'center'}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#FFFFFF", textAlign:'auto' }}>Watch Tour</Text>  
                                </TouchableOpacity>

                            </View>
                    </View>
                </View> 

                <View style={{width:"50%"}}> 
                    <View style={{justifyContent:'center', alignItems:'center',paddingVertical:10, borderBottomWidth:1, borderBottomColor:'#B2B1B1'}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color:"#00000" , textAlign:'center' }}>Collage 2</Text>  
                    </View>
                    
                    <View style={{paddingHorizontal:10, paddingTop:10,paddingBottom:30}}>
                        <View style={{width:'100%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                        </View>
                        <View style={{justifyContent:'center', alignItems:'center',marginTop:10}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000" , textAlign:'center' }}>Savitribai Phule Pune  University</Text>  
                            </View>  

                            <View style={{justifyContent:'space-between', alignItems:'center',marginTop:20, flexDirection:'row'}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" }}>Location :</Text>  
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656"}}>Pune</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:20}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color:"#00000" , textAlign:'center' }}>Branches Offered</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:15}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" , textAlign:'center' }}>Cutoff ( Previous Year )</Text>  
                            </View>
                            <View style={{marginTop:15}}>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>General</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>92%</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>OBC</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>82%</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>ST/SC</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>72%</Text>  
                            </View>
                            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656" }}>NT</Text>  
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#575656"}}>40%</Text>  
                            </View>
                            </View>

                            <View style={{justifyContent:'space-between', alignItems:'center',marginTop:15, flexDirection:'row'}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" }}>Collage Fees :</Text>  
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656"}}>70,0000</Text>  
                            </View>
                            
                            <View style={{marginTop:15}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#575656" }}>Infrastructure</Text>  
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center',marginTop:15}}>
                                <TouchableOpacity style={{width:'75%', backgroundColor:"#F263FF", padding:10, borderRadius:10, justifyContent:"center", alignItems:'center'}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#FFFFFF", textAlign:'auto' }}>Watch Tour</Text>  
                                </TouchableOpacity>

                            </View>                     
                    </View>
                </View> 
            </View>
                <View style={{alignItems:'center', justifyContent:'space-between',flexDirection:'row',width:"100%", paddingHorizontal:10}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:"center", borderRadius:10,borderColor:'#00000040',borderWidth:1, width:'65%', backgroundColor:'#ffff',padding:10}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color:"#777575", textAlign:'center' }}>Save Comparison</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:"center", borderRadius:10,width:'30%', backgroundColor:'#F263FF',padding:10}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color:"#FFFFFF", textAlign:'center' }}>Share</Text>  
                    </TouchableOpacity>
                </View>
        </View>
  </ScrollView>
  <Footer/>

</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',

  },
  searchInput: {
    flex: 7,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginRight: 3,
    fontSize: 12, 
  },
  searchButton: {
    flex: 3,
    backgroundColor: '#E30CF7',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:12
  },
  documenttext:{
        fontSize:14,
         color:'#000000',
         fontWeight:'bold'
  }
});

export default CollegeComparison;
