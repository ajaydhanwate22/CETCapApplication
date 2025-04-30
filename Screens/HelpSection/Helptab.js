// ./Screens/Home.js
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const Helptab = ({navigation}) => {

  return (
<SafeAreaView style={styles.container}>
  {/* Main Content */}
  <View style={styles.content}>
    {/* <Image source={require('../Assets/images/universitylogo.png')} style={{ resizeMode: 'contain', width: '100%', height: 50}}/>

    <Image  source={require('../Assets/images/universityCollege.png')} style={{ width: '100%',height: 300, resizeMode: 'contain'}} /> */}

    <Text style={styles.title}>Help tab</Text>

    <Text style={styles.subtitle}>
      Filter your options based on eligibility performance, and preferences.
    </Text>
{/* 
    <Text style={styles.subtitle}>
      Filter your options based on eligibility performance, and preferences.
    </Text> */}
  </View>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c8f9',
    padding: 20,
  },
  
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  logoPart: {
    color: '#000000',
  },
  textPart: {
    color: '#E30CF7',
  },
  mainImage: {
    width: 420,
    height: 280,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    // fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
    paddingHorizontal: 20, 
    fontFamily:'Poppins-Bold',
    // backgroundColor:'red'
  },
  subtitle: {
    fontSize: 20,
    // fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    paddingHorizontal: 20,
    fontFamily:'Poppins-Medium',
  },
  bottomWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  bottomNav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  line: {
    marginTop: 10,
    width: '40%',
    height: 10,
    borderRadius: 20,
    backgroundColor: '#E6E2E2',
    justifyContent:'center',
    alignItems:"center"
  },
});

export default Helptab;
