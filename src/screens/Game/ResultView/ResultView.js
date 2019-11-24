import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ResultView = ({ goBack, questionsLength, result }) => {
  return (
    <View style={styles.resultView}>
      <Text style={styles.title}>
        { result === 0 ? `Don't worry, try again!` : `Congratulations!` }
      </Text>
      <Text style={styles.result}>
        You answered correctly {result} of {questionsLength} questions.
      </Text>
      <Icon name="ios-arrow-round-back" onPress={() => goBack()} size={50} style={styles.icon} color="white"/>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: '2%',
    top: '1%'
  },
  resultView: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  result: {
    paddingTop: 20,
    color: 'white',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
  },
  title: {
    paddingTop: '40%',
    color: 'white',
    fontSize: 30
  }
});

ResultView.propTypes = {};

export default ResultView;