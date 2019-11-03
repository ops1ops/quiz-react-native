import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from "./styles";
import {Modal, TouchableHighlight, Alert, Picker, RefreshControl, ProgressBarAndroid, StatusBar} from 'react-native';
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";

const Menu = ({ navigation: { navigate, push, toggleDrawer }}) => {
  const [userName, setUserName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const handleAuth = useCallback(() => {
    push('Game');
  }, [userName]);

  return (
    <ScrollView style={styles.view}>
      <Text style={styles.textLogo}>
        Welcome to Quiz!
      </Text>
      <Text style={styles.text}>
        Enter your nickname
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <Button
        styles={styles.button}
        title={userName}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Picker
        // selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          console.log(itemValue, itemIndex)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <ProgressBarAndroid />
      <RefreshControl refreshing={true} onRefresh={() => console.log(1)}/>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles1.linearGradient}>
        <Text style={styles1.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>

      // Later on in your styles..

    </ScrollView>
  );
};

Menu.propTypes = {};

const styles1 = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Menu;