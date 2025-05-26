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
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import profileImage from '../../Assets/images/profile.png';

const EditProfileTab = () => {
  const [imageUri, setImageUri] = useState(null);
  const [firstName, setFirstName] = useState('Sabrina');
  const [lastName, setLastName] = useState('Aryan');
  const [username, setUsername] = useState('@Sabrina');
  const [email, setEmail] = useState('@SabrinaAry208@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+234     904 6470');
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [showBirthModal, setShowBirthModal] = useState(false);

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

  const toggleBirthModal = () => {
    setShowBirthModal(!showBirthModal);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Icon name="chevron-back-outline" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Edit Profile</Text>
            <View style={styles.placeholder} />
          </View>

          <View style={styles.avatarContainer}>
            <Image
              source={imageUri ? {uri: imageUri} : profileImage}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
              <Icon name="camera" size={18} color="#000" />
            </TouchableOpacity>
          </View>

          <Text style={styles.subHeader}>Edit Profile</Text>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={text => setFirstName(text)}
                placeholder="First Name"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={text => setLastName(text)}
                placeholder="Last Name"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Username"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Birth</Text>
              <TouchableOpacity
                style={styles.dropdown}
                onPress={toggleBirthModal}>
                <Text style={styles.dropdownText}>{birthDate || 'Birth'}</Text>
                <Icon name="chevron-down" size={18} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Gender</Text>
              <TouchableOpacity
                style={styles.dropdown}
                onPress={toggleGenderModal}>
                <Text style={styles.dropdownText}>{gender || 'Gender'}</Text>
                <Icon name="chevron-down" size={18} color="#000" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.changePasswordButton}>
              <Text style={styles.buttonText}>Change Password</Text>
              <Icon name="lock-closed" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

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
            <TouchableOpacity onPress={toggleGenderModal}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Birth Date Modal */}
      <Modal
        visible={showBirthModal}
        transparent
        animationType="slide"
        onRequestClose={toggleBirthModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Birth Date</Text>
            {/* Simple placeholder for date picker */}
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setBirthDate('January 1, 2000');
                toggleBirthModal();
              }}>
              <Text style={styles.modalOptionText}>Select Date</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBirthModal}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EditProfileTab;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  backButton: {
    padding: 5,
  },
  placeholder: {
    width: 24, // Same width as the back button for balance
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
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
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 6,
    color: '#666',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 14,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  dropdownText: {
    color: '#555',
    fontSize: 14,
  },
  changePasswordButton: {
    flexDirection: 'row',
    backgroundColor: '#083E70',
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
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
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalOptionText: {
    fontSize: 16,
  },
  modalCancel: {
    marginTop: 15,
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  },
});
