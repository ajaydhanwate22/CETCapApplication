import React, { useEffect, useState  } from 'react';
import { View, StyleSheet, Image,Text, ScrollView } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('BottomTabs'); // or whatever screen
        }, 3000); // 3 seconds
    
        return () => clearTimeout(timer); // Cleanup on unmount
      }, [navigation]);


  return (
    <LinearGradient colors={['#CA01DD', '#F8A9FF']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../Assets/images/spalshscreenlogo.png')} style={[styles.logo, { marginBottom: -60 }]} resizeMode="contain" />
        <Image source={require('../Assets/images/universitylogo.png')} style={styles.logo} resizeMode="contain" />
      </View>
          <View style={styles.line} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,  
    height: 180, 
  },
  line: {
    position: 'absolute',
    bottom: 20, // बॉटम से कितना ऊपर दिखे
    alignSelf: 'center',
    width: '40%',
    height: 10,
    borderRadius: 20,
    backgroundColor: '#E6E2E2',
  },
});

export default SplashScreen;
