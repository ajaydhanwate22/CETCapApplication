// ./Screens/Home.js
import { FontAwesome5 } from '@expo/vector-icons';
import React , { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../Header';

const Documentneed = ({navigation}) => {

    const [isChecked, setIsChecked] = useState(false);

  return (
<SafeAreaView style={styles.container}>
    <ScrollView>

        {/* header */}
        <Header/>


        {/* body contained */}

        <View style={{paddingHorizontal:20, paddingVertical:20, gap:30}} >
            <Text style={{textAlign:'center', fontSize:22, color:'#000000',fontWeight:'bold'}}>Document Submission</Text>
            <View style={styles.searchRow}>
            <TextInput placeholder="Search exam details..." style={styles.searchInput}  placeholderTextColor="#807E7E" />
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', gap:10}}>
                    <FontAwesome name="check-square" size={20} color="#A7A2A2" />
                    <Text style={{fontSize:14, color:'#000000',fontWeight:'bold'}}>Already Uploaded</Text>
            </View>
            
            <Text style={{fontSize:16, color:'#000000',fontWeight:'bold',paddingHorizontal:10, top:10}}>Document Details</Text>
            <View style={{paddingHorizontal:10,gap:20}}>
                <Text style={styles.documenttext}>1. Adhar Card ID Proof</Text>
                <Text style={styles.documenttext}>2. 10th Marksheet</Text>
                <Text style={styles.documenttext}>3. 12th Marksheet</Text>
                <Text style={styles.documenttext}>4. Domicile Certificate</Text>
                <Text style={styles.documenttext}>5. Leaving Certificate</Text>
                <Text style={styles.documenttext}>6. Caste Certificate</Text>
                <Text style={styles.documenttext}>7. Income Certificate</Text>
                <Text style={styles.documenttext}>8. Signature</Text>
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

export default Documentneed;
