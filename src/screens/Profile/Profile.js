import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import axios from 'axios';
import {Avatar} from 'react-native-elements';
import { createAppContainer } from "react-navigation";

import TopNavigation from "./topNavgiation";

const TabNavigator = createAppContainer(TopNavigation);

const Profile = ({ navigation }) => {
  const { id: user_id } = navigation.getParam('user', []);
  const [{ name, rating, score, search, statistic, total_count }, setUserInfo] = useState({});

  useEffect(() => {
    axios.get(`http://quiz.minedonate.ru/v1/user/${user_id}?include=statistic&user_id=${user_id}`)
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch(({ response: { data }}) => console.log(data))
  }, []);

  return (
    <View style={{ flex: 3 }}>
      <LinearGradient colors={['#5b86e5', '#36d1dc']} style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10, }}>
        <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
        <View style={styles.profileContainer}>
          <Avatar
            icon={{name: 'user', type: 'font-awesome'}}
            title={name && name.substring(0, 1)}
            size="xlarge"
            rounded
          />
          <Text style={styles.name}>
            { name }
          </Text>
          <Text style={styles.search}>
            { `@${search}` }
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.tabsContainer}>
        <TabNavigator />
      </View>
    </View>

  );
};

Profile.propTypes = {};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    paddingVertical: 5,
    fontSize: 40,
    color: 'white'
  },
  search: {
    fontSize: 23,
    color: 'white',
  },
  tabsContainer: {
    backgroundColor: '#E6E7E8',
    flex: 2,
  }
});

export default Profile;