// ./Screens/Home.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import chatUser from '../../Assets/images/chat-user.png';
import chatBot from '../../Assets/images/chat-logo.png';
import IonIcon  from 'react-native-vector-icons/Ionicons';

const Helptab = ({navigation}) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
          <Header/>
      <View style={styles.content}>
        <View style={styles.chatContainer}>
          <View style={styles.botMessageWrapper}>
            <View style={styles.botIconContainer}>
              <Image source={chatBot} style={styles.botIcon} />
            </View>

            <View style={styles.botMessageContainer}>
              <View style={styles.botBubble}>
                <Text style={styles.botMessageText}>
                  👋 Welcome! I'm your CET CAP Assistant Bot. Ready to help you
                  anytime. What would you like to know today?
                </Text>
              </View>

              <View style={styles.botMessageFooter}>
                <Text style={styles.timestamp}>7:20</Text>
                <View style={styles.messageActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.copyIcon}>
                      <Icon name="content-copy" size={16} color="white" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.thumbsUpIcon}>
                      {/* <Icon name="thumb-up" size={16} color="white" /> */}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.thumbsDownIcon}>
                      {/* <Icon name="thumb-down" size={16} color="white" /> */}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.userMessageWrapper}>
            <View style={styles.userMessageContainer}>
              <View style={styles.userBubble}>
                <Text style={styles.userMessageText}>
                  I'm confused about the CAP process. Please help
                </Text>
              </View>

              <View style={styles.userMessageFooter}>
                <Text style={styles.timestamp}>7:20</Text>
                <Text style={styles.checkmark}>✓</Text>
              </View>
            </View>

            <View style={styles.userIconContainer}>
              <Image source={chatUser} style={styles.userIcon} />
            </View>
          </View>
        </View>

        {/* Input Area */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.inputField}
            onPress={() => setInputFocused(true)}>
            {!inputFocused ? (
              <Text style={styles.inputPlaceholder}>Type a message...</Text>
            ) : (
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message..."
                placeholderTextColor="#999"
                autoFocus={inputFocused}
                onBlur={() => setInputFocused(false)}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.sendButton}>
            <IonIcon name="arrow-forward-outline" size={20} color="white" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },

  chatContainer: {
    flex: 1,
    paddingVertical: 10,
  },

  // Bot Message Styles
  botMessageWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
  },

  botIconContainer: {
    marginRight: 8,
  },

  botIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8A2BE2',
  },

  botMessageContainer: {
    flex: 1,
    maxWidth: '70%',
  },

  botBubble: {
    backgroundColor: '#6a1b9a',
    padding: 15,
    borderRadius: 18,
    borderBottomLeftRadius: 4,
  },

  botMessageText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },

  botMessageFooter: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },

  messageActions: {
    flexDirection: 'row',
    backgroundColor: '#7B2CBF',
    borderRadius: 10,
    padding: 5,
    marginTop: -25,
    marginRight: 15,
    // margin: 10,
  },

  actionButton: {
    marginLeft: 10,
  },

  copyIcon: {
    width: 24,
    height: 24,
    // backgroundColor: '#f0f0f0',
    color: '#fff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  thumbsUpIcon: {
    width: 24,
    height: 24,
    // backgroundColor: '#f0f0f0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  thumbsDownIcon: {
    width: 24,
    height: 24,
    // backgroundColor: '#f0f0f0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyIconText: {
    fontSize: 14,
  },

  thumbIconText: {
    fontSize: 14,
  },

  // User Message Styles
  userMessageWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  userIconContainer: {
    marginLeft: 8,
    marginBottom: 15,
  },

  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd', // Placeholder color if image doesn't load
  },

  userMessageContainer: {
    maxWidth: '60%',
  },

  userBubble: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 18,
    borderBottomRightRadius: 4,
  },

  userMessageText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },

  userMessageFooter: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },

  timestamp: {
    color: '#888888',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  checkmark: {
    color: '#888888',
    fontSize: 12,
    marginLeft: 5,
  },

  // Input Area Styles
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  inputField: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    minHeight: 45,
    justifyContent: 'center',
  },

  input: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },

  inputPlaceholder: {
    fontSize: 16,
    color: '#999999',
    fontFamily: 'Poppins-Regular',
  },

  sendButton: {
    width: 45,
    height: 45,
    backgroundColor: '#6a1b9a',
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendIcon: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Helptab;
