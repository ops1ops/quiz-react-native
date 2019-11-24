import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from "./styles";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";
import MenuButton from "../../components/MenuButton/MenuButton";

const Menu = ({ navigation: { navigate, push, toggleDrawer }}) => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('@user').then(value => {
      if(value !== null) {
        const localUser = JSON.parse(value);
        setUser(localUser);
        axios.get(`http://quiz.minedonate.ru/v1/categories?user_id=${localUser.id}`)
          .then(({ data }) => {
            setCategories(data);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        axios.post('http://quiz.minedonate.ru/v1/user')
          .then(({ data }) => {
            setUser(data);
            AsyncStorage.setItem('@user', JSON.stringify(data)).then(() => {
              axios.get(`http://quiz.minedonate.ru/v1/categories?user_id=${data.id}`)
                .then(({ data }) => {
                  setCategories(data);
                })
                .catch(err => {
                  console.log(err);
                });
            })
          })
          .catch(err => {
            console.log(err);
          });
      }
    }).catch(err => console.log(err));
  }, []);

  return (
    <LinearGradient colors={['#5b86e5', '#36d1dc']} style={styles1.linearGradient}>
      <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
      <ScrollView>
        <Text style={styles.textLogo}>
          Welcome to Quiz
        </Text>
        <View>
          <MenuButton
            text="Play"
            onPress={() => navigate('Game', { categories, user })}
            containerStyle={{ backgroundColor: '#2BBBAD' }}
            textStyle={{ color: 'white' }}
          />
          <MenuButton
            text="Profile"
            onPress={() => navigate('Profile', { user })}
          />
          <MenuButton
            text="Leaderboard"
            onPress={() => navigate('LeaderBoard', { user })}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

Menu.propTypes = {};

const styles1 = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
  }
});

export default Menu;