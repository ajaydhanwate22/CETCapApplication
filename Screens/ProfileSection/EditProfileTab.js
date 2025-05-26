import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import profileImage from '../../Assets/images/profile.png';

const EditProfileTab = () => {
  const [imageUri, setImageUri] = useState(null);
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const toggleGenderModal = () => {
    setShowGenderModal(!showGenderModal);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        {/* <Icon name="chevron-back-outline" size={24} color="#000" /> */}
      </TouchableOpacity>

      <Text style={styles.header}>Edit Profile</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={imageUri ? {uri: imageUri} : profileImage}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
          {/* <Icon name="camera" size={18} color="#fff" /> */}
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeader}>Edit Profile</Text>

      {[
        {label: 'First Name', value: 'Sabrina'},
        {label: 'Last Name', value: 'Aryan'},
        {label: 'Username', value: '@Sabrina'},
        {
          label: 'Email',
          value: '@SabrinaAry208@gmail.com',
          keyboardType: 'email-address',
        },
        {
          label: 'Phone Number',
          value: '+234 904 6470',
          keyboardType: 'phone-pad',
        },
      ].map((field, idx) => (
        <View style={styles.inputGroup} key={idx}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            value={field.value}
            placeholder={field.label}
            keyboardType={field.keyboardType || 'default'}
          />
        </View>
      ))}

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Birth</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select Birth Date</Text>
          {/* <Icon name="chevron-down" size={18} color="#000" /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Gender</Text>
        <TouchableOpacity style={styles.dropdown} onPress={toggleGenderModal}>
          <Text style={styles.dropdownText}>{gender || 'Select Gender'}</Text>
          {/* <Icon name="chevron-down" size={18} color="#000" /> */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.changePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
        {/* <Icon name="lock-closed" size={16} color="#fff" /> */}
      </TouchableOpacity>

      {/* Gender Modal */}
      <Modal
        visible={showGenderModal}
        transparent
        animationType="slide"
        onRequestClose={toggleGenderModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            {['Male', 'Female', 'Other'].map(option => (
              <TouchableOpacity
                key={option}
                style={styles.modalOption}
                onPress={() => {
                  setGender(option);
                  toggleGenderModal();
                }}>
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
         
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default EditProfileTab;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 60,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 5,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputGroup: {
    width: '80%',
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    color: '#00000096',
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 14,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
  },
  dropdownText: {
    color: '#555',
    fontSize: 14,
  },
  changePassword: {
    flexDirection: 'row',
    backgroundColor: '#083E70',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    marginRight: 8,
    fontWeight: '600',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
  },
  modalCancel: {
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },
});
