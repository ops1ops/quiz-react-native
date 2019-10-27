import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import axios from "axios";

const Auth = ({ navigation: { navigate }}) => {
  const [userName, setUserName] = useState('');
  const handleAuth = useCallback(() => {
    axios.post(`http://quiz.minedonate.ru/v1/user`, { name: userName })
      .then((res) => console.log(res.data))
      .catch(err => console.log(err));
    navigate('Game');
  }, [userName]);

  return (
    <View>
      <Text>
        Welcome to Quiz! Enter your nickname
      </Text>
      <TextInput
        onChangeText={setUserName}
        value={userName}
      />
      <Button
        title={userName}
        onPress={handleAuth}
      />
    </View>
  );
};

Auth.propTypes = {};

export default Auth;