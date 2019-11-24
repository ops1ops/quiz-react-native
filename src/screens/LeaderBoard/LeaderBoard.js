import React, {useContext , useEffect, useState} from 'react';
import {
  Image, ScrollView, StatusBar,
  StyleSheet, Text, TouchableOpacity, View, ViewStyle
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";

const badName = 'KONOPL9I';

const LeaderBoard = ({ navigation }) => {
  const [leaders, setLeaders] = useState([]);
  const { id: user_id } = navigation.getParam('user', []);

  useEffect(() => {
    axios.get(`http://quiz.minedonate.ru/v1/user/rating/?user_id=${user_id}`)
      .then(({ data }) => {
        setLeaders(data);
        console.log(data)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <LinearGradient colors={['#5b86e5', '#36d1dc']} style={{ flex: 1, paddingTop: 10, position: 'relative'}}>
        <Icon
          name="ios-arrow-round-back"
          onPress={() => navigation.goBack()}
          size={50}
          style={styles.icon}
          color="white"
        />
        <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
        <Text style={styles.title}>
          Leaderboard
        </Text>
        <ScrollView>
          <DataTable style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10 }}>
            <DataTable.Header styles={{ header: { color: 'white'}}}>
              <DataTable.Title>Place</DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title numeric>Score</DataTable.Title>
            </DataTable.Header>
            { leaders.map(({ name, rating, score }) => (
              name !== badName && (
                <DataTable.Row>
                  <DataTable.Cell style={{ color: 'white'}}>{ rating }</DataTable.Cell>
                  <DataTable.Cell style={{ color: 'white'}}>{ name }</DataTable.Cell>
                  <DataTable.Cell numeric>{ score }</DataTable.Cell>
                </DataTable.Row>
              )
            ))}
          </DataTable>
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
  icon: {
    position: 'absolute',
    left: '5%',
    top: '2%',
    zIndex: 1000,
  },
});

export default LeaderBoard;