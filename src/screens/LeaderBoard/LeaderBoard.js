import React, {useContext} from 'react';
import {
  Image, ScrollView, StatusBar,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {UserInfoContext} from "../Profile/Profile";

const LeaderBoard = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#5b86e5', '#36d1dc']} style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 10, paddingTop: 10}}>
        <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
        <ScrollView>
          <Text style={styles.title}>
            Leader board
          </Text>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    paddingHorizontal: 20
  },
})

export default LeaderBoard;