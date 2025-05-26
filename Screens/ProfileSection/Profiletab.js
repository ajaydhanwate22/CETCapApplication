import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import profileImage from '../../Assets/images/profile.png';

const Profiletab = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.header}>
          <TouchableOpacity>
            {/* <Icon name="chevron-back-outline" size={24} color="#000000" /> */}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity>
            {/* <Icon name="settings-outline" size={24} color="#000" /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}>
            <Image source={profileImage} style={styles.profileImage} />

            <TouchableOpacity style={styles.cameraIcon}>
              {/* <Icon name="camera" size={20} color="#fff" /> */}
            </TouchableOpacity>
          </View>

          <View style={styles.profileRight}>
            <Text style={styles.profileName}>Sabrina Aryan</Text>
            <Text style={styles.profileEmail}>SabrinaAry208@gmail.com</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Text
                  onPress={() => navigation.navigate('EditProfile')} 
                  style={styles.buttonText}>
                  Edit Profile
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonOutlineText}>Share Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Settings List */}
        <View style={styles.settingsGroup}>
          <View style={styles.settingsItem}>
            {/* <Icon name="notifications-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Mute notifications</Text>
            <Switch />
          </View>

          <View style={styles.settingsItem}>
            {/* <Icon name="musical-notes-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Custom notifications</Text>
          </View>

          <View style={styles.settingsItem}>
            {/* <Icon name="folder-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Media visibility</Text>
          </View>
        </View>

        <View style={styles.settingsGroup}>
          <View style={styles.settingsItem}>
            {/* <Icon name="globe-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Language</Text>
            {/* <Icon name="chevron-forward-outline" size={24} color="#000000" /> */}
          </View>

          <View style={styles.settingsItem}>
            {/* <Icon name="location-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Location</Text>
            {/* <Icon name="chevron-forward-outline" size={24} color="#000000" /> */}
          </View>

          <View style={styles.settingsItem}>
            {/* <Icon name="download-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Download</Text>
            {/* <Icon name="chevron-forward-outline" size={24} color="#000000" /> */}
          </View>

          <View style={styles.settingsItem}>
            {/* <Icon name="trash-outline" size={22} color="#699BF7" /> */}
            <Text style={styles.settingsText}>Clear History</Text>
            {/* <Icon name="chevron-forward-outline" size={24} color="#000000" /> */}
          </View>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          {/* <Icon name="log-out-outline" size={22} color="#F80E0E" /> */}
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profiletab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  profileLeft: {
    position: 'relative',
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    // backgroundColor: '#007AFF',
    padding: 4,
    borderRadius: 8,
  },

  profileRight: {
    marginLeft: 16,
    flex: 1,
  },

  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },

  profileEmail: {
    color: '#666',
    fontSize: 14,
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },

  button: {
    backgroundColor: '#1C8EF7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  buttonOutline: {
    borderColor: '#007AFF',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },

  buttonOutlineText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonOutline: {
    backgroundColor: '#007AFF',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonOutlineText: {
    color: '#fff',
    fontWeight: '600',
  },
  settingsGroup: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  settingsText: {
    marginLeft: 16,
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  logoutText: {
    color: '#F80E0E',
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
  },
});
