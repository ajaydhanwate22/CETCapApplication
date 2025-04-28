// ./Screens/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UniversityCollegeSearch = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to UniversityCollegeSearch!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UniversityCollegeSearch;
