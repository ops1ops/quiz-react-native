import React, { useState, useCallback, useEffect } from 'react';
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
  console.log(categories)
  useEffect(() => {
    console.log(1)
    axios.get('https://opentdb.com/api_category.php')
      .then(({ data: { trivia_categories } }) => {
        setCategories(trivia_categories);
      })
      .catch(err => {
        console.log(err);
      });
    axios.post('http://quiz.minedonate.ru/v1/user')
      .then(({ data }) => {
        setUser(data);
      })
      .catch(err => {
        console.log(err);
      });
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
          <MenuButton text="Profile"/>
          <MenuButton text="Leader board" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

Menu.propTypes = {};

const styles1 = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
  }
});

export default Menu;