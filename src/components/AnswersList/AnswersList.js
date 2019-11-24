import React, { useState, useCallback } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AnswersList = ({ data, answerOnQuestion, isLastQuestion }) => {
  const [isAnswered, setAnswered] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState();

  const onPress = useCallback(
    (answerId) => {
      if (!isAnswered) {
        setAnswered(true);
        setSelectedAnswerId(answerId);
        setTimeout(() => {
          answerOnQuestion(answerId);
          if (!isLastQuestion) setAnswered(false);
        }, 1000);
      }
    },
    [isAnswered],
  );

  return (
    <View style={styles.answersContainer}>
      { data.map(({ id, name, is_right }) => (
        <TouchableOpacity
          key={id}
          style={{ ...styles.button, ...(isAnswered && is_right ? styles.isRightButton : id === selectedAnswerId ? styles.isNotRightButton : {}) }}
          activeOpacity={1}
          onPress={() => onPress(id)}
        >
          <Text style={{ ...styles.buttonText, ...(isAnswered && is_right ? styles.isAnsweredText : id === selectedAnswerId ? styles.isAnsweredText : {}) }}>
            { name }
          </Text>
        </TouchableOpacity>
      )) }
    </View>
  );
};

const styles = StyleSheet.create({
  answersContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '45%',
    minHeight: 60,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    opacity: 0.6,
    fontSize: 18,
    fontWeight: 'bold'
  },
  isNotRightButton: {
    backgroundColor: 'red',
  },
  isRightButton: {
    backgroundColor: '#17F1D7',
  },
  isAnsweredText: {
    opacity: 1,
    color: 'white'
  }
});

export default AnswersList;