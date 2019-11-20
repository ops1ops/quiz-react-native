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
export const UserInfoContext = React.createContext('');

const Profile = ({ navigation }) => {
  const { id: user_id } = navigation.getParam('user', []);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { search, name } = userInfo;

  useEffect(() => {
    setLoading(true);
    axios.get(`http://quiz.minedonate.ru/v1/user/${user_id}?include=statistic,games&user_id=${user_id}`)
      .then(({ data }) => {
        console.log(data)
        setUserInfo(data);
      })
      .catch(({ response: { data }}) => console.log(data))
      .finally(() => setLoading(false));
  }, []);
  console.log("userInfo", userInfo)
  return (
    <View style={{ flex: 3 }}>
      <UserInfoContext.Provider value={{ userInfo, navigate: navigation.navigate }}>
        <LinearGradient colors={['#5b86e5', '#36d1dc']} style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10, }}>
          <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
          <View style={styles.profileContainer}>
            <Avatar
              icon={{name: 'user', type: 'font-awesome'}}
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
      </UserInfoContext.Provider>
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
    backgroundColor: '#F0F6F4',
    flex: 2,
  }
});

export default Profile;