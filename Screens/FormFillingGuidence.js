// ./Screens/Home.js
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const FormFillingGuidence = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo Text */}
      <Text style={styles.logoText}>
        <Text style={styles.logoPart}>LOGO</Text>
        <Text style={styles.textPart}>TEXT</Text>
      </Text>

      <Image
        source={require('../Assets/images/form-filling.png')}
        style={styles.mainImage}
      />

      <Text style={styles.title}>University & College Search</Text>

      <Text style={styles.subtitle}>
        Filter your options based on eligibility performance, and preferences.
      </Text>

      {/* Bottom Navigation */}
      <View style={styles.bottomWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UniversityCollegeSearch')}>
            <Text style={styles.bottomText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CollegeInsights')}>
            <Text style={styles.bottomText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* Small Line */}
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c8f9',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    justifyContent: 'space-between',
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
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    paddingHorizontal: 10,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  line: {
    marginTop: 10,
    width: 180,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#E6E2E2',
  },
});

export default FormFillingGuidence;
