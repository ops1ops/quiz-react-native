import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const Profile = ({ navigation: { navigate, push, toggleDrawer }}) => {

  return (
    <LinearGradient colors={['#5b86e5', '#36d1dc']} style={styles1.linearGradient}>
      <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
      <ScrollView>
        <Text>
          123
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

Profile.propTypes = {};

const styles1 = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
  }
});

export default Profile;