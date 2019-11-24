import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import AnswersList from "../../../components/AnswersList/AnswersList";

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

const CategoryView = ({ questionIndex, questions, answerOnQuestion }) => {
  const questionsLength = questions.length;
  const isLastQuestion = questionsLength - 1 === questionIndex;
  console.log(isLastQuestion)
  const answers = questions[questionIndex].ranswers;
  const answersLength = answers.length;
  const data = array_move(answers, answersLength - 1, Math.floor(Math.random() * (answersLength - 1) + 1));
  console.log("DATA", data.length)

  return (
    <View style={styles.gameView}>
      <Text style={styles.progress}>{`${questionIndex + 1}/${questionsLength}`}</Text>
      <Text style={styles.question}>{ questions[questionIndex].name }</Text>
      <View>
        <AnswersList
          data={data}
          isLastQuestion={isLastQuestion}
          answerOnQuestion={answerOnQuestion}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    paddingVertical: 14,
    textAlign: 'center',
    fontSize: 23,
    paddingHorizontal: 20
  },
  categoriesContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    height: 500
  },
  progress: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontSize: 15,
    opacity: 0.6
  },
  question: {
    paddingTop: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingBottom: 30,
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
  },

});

CategoryView.propTypes = {};

export default CategoryView;