// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React , { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../Header';
import Footer from '../Footer';


const CollegeFilter = ({navigation}) => {

    const [isChecked, setIsChecked] = useState(false);
    const [selectedGender, setSelectedGender] = useState('Male');

  return (
<SafeAreaView style={styles.container}>
<Header/>

    <ScrollView>

        {/* header */}

        {/* body contained */}

        <View style={{paddingHorizontal:20, paddingVertical:20}} >
            <View style={styles.searchRow}>
            <TextInput placeholder="Search college..." style={styles.searchInput}  placeholderTextColor="#807E7E" />
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Compare</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:20, gap:7}}>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                        <TouchableOpacity  style={{ width: '80%',borderWidth: 1, borderColor: '#EBEBEB',  borderRadius: 10, paddingHorizontal: 10, height: 50,
                                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
                            onPress={() => {
                            // Handle dropdown or navigation to category selection
                            }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00000' }}>Choose Category</Text>
                        <AntDesign name="right" size={16} color="#00000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row',width: '100%', alignItems: 'center'}}>
                    <TextInput placeholder="Enter Percentage" style={{width:'80%',borderWidth: 1,borderColor: '#EBEBEB',borderRadius: 10,paddingHorizontal: 10,
                    height: 50, marginRight: 3, fontSize: 14,fontWeight:'bold' }}  placeholderTextColor="#807E7E" />
                    </View>
                    <View style={{flexDirection: 'row',width: '100%', alignItems: 'center'}}>
                    <TextInput placeholder="Enter Percentage" style={{width:'80%',borderWidth: 1,borderColor: '#EBEBEB',borderRadius: 10,paddingHorizontal: 10,
                    height: 50, marginRight: 3, fontSize: 14,fontWeight:'bold' }}  placeholderTextColor="#807E7E" />
                    </View>
                    <View style={{flexDirection: 'row',width: '100%', alignItems: 'center'}}>
                    <TextInput placeholder="Enter Your Branch" style={{width:'80%',borderWidth: 1,borderColor: '#EBEBEB',borderRadius: 10,paddingHorizontal: 10,
                    height: 50, marginRight: 3, fontSize: 14,fontWeight:'bold' }}  placeholderTextColor="#807E7E" />
                    </View>


                <View style={{ flexDirection: 'row', alignItems: 'center' ,width: '100%', gap:20, marginTop:20}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:"#00000" }}>Gender</Text>
                        <TouchableOpacity onPress={() => setSelectedGender('Male')} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                            <View style={{ height: 30,  width: 30, borderRadius: 15,borderWidth: 2, borderColor: '#ccc', alignItems: 'center',justifyContent: 'center',marginRight: 6}}>
                                {selectedGender === 'Male' && (
                                <View style={{ height: 10, width: 10,borderRadius: 5,backgroundColor: '#0184FF',}} />)}
                            </View>
                            <Text style={{ fontSize: 16 }}>Male</Text>
                        </TouchableOpacity>

                    <TouchableOpacity  onPress={() => setSelectedGender('Female')} style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{ height: 30, width: 30, borderRadius: 15,borderWidth: 2, borderColor: '#ccc', alignItems: 'center',
                        justifyContent: 'center', marginRight: 6}}>
                        {selectedGender === 'Female' && (
                        <View style={{ height: 10,  width: 10, borderRadius: 5, backgroundColor: '#0184FF',}} />)}
                    </View>
                    <Text style={{ fontSize: 16 }}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        
            {/*collgee image and name container */}
            <View style={{gap:5, paddingHorizontal:20, paddingBottom:20}}>
            <View style={{justifyContent:'center', alignItems:'center',padding:10, borderWidth:1, borderColor:'#E2DFDF', borderRadius:10}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%'}}>

                    <View style={{width:'40%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                    </View>

                    <View style={{width:'55%', gap:5}}>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#00000"  }}>Savitribai Phule Pune  University</Text>  
                        </View>
                        <View>  
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Lorem Ipsum has been the industry's standard dummyIt has survived not only five centuries.</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#00000"  }}>Collage Type : Private</Text>  
                        </View>
                        <View style={{alignItems:'center', gap:5, flexDirection:'row'}}>
                             <Entypo name="star" size={16} color="#FFD208" />
                             <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={{justifyContent:'center', alignItems:'center',padding:10, borderWidth:1, borderColor:'#E2DFDF', borderRadius:10}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%'}}>

                    <View style={{width:'40%', height:130, borderRadius:10, backgroundColor:"#DFDCDC", alignItems:"center", justifyContent:"center"}}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color:"#00000"  }}>IMG</Text>  
                    </View>

                    <View style={{width:'55%', gap:5}}>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#00000"  }}>Savitribai Phule Pune  University</Text>  
                        </View>
                        <View>  
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>Lorem Ipsum has been the industry's standard dummyIt has survived not only five centuries.</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#00000"  }}>Collage Type : Private</Text>  
                        </View>
                        <View style={{alignItems:'center', gap:5, flexDirection:'row'}}>
                             <Entypo name="star" size={16} color="#FFD208" />
                             <Text style={{ fontSize: 12, fontWeight: 'bold', color:"#837F7F"  }}>1.90M</Text>
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

export default CollegeFilter;
