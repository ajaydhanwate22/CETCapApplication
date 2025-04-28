// ./Screens/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormFillingGuidence = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to FormFillingGuidence!</Text>
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

export default FormFillingGuidence;
