import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const ResultView = ({ questionsLength, result, score }) => {
  return (
    <View style={styles.resultView}>
      <Text style={styles.title}>
        { result === 0 ? `Don't worry, try again!` : `Congratulations!` }
      </Text>
      <Text style={styles.result}>
        You answered correctly {result} of {questionsLength} questions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultView: {
    flex: 1,
    alignItems: 'center',
  },
  result: {
    paddingTop: 20,
    color: 'white',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center'
  },
  title: {
    paddingTop: '40%',
    color: 'white',
    fontSize: 30
  }
});

ResultView.propTypes = {};

export default ResultView;