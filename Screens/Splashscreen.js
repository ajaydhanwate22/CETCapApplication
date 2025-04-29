// import React, { useEffect } from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('UniversityCollegeSearch'); 
    }, 300); 

//     return () => clearTimeout(timer); 
//   }, []);

  return (
    <LinearGradient
      colors={['#0c1867', '#00c8f4']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../Assets/CETCapApplication.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   innerContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 250,
//     height: 250,
//   },
// });

// export default SplashScreen;
