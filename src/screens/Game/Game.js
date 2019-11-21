import React, { useState, useEffect } from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  View, ScrollView,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import axios from 'axios';

import CategoriesView from "./CategoriesView/CategoriesView";
import QuestionsView from "./GameView/QuestionsView";
import ResultView from "./ResultView/ResultView";

const Game = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [questions, setQuestions] = useState([]);
  const [gameId, setGameId] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [questionsCount, setQuestionsCount] = useState(5);

  const questionsLength = questions.length;
  const categories = navigation.getParam('categories', []);
  const { id: user_id } = navigation.getParam('user', []);

  const startGame = () => {
    console.log(navigation.getParam('user').id, selectedCategory)
    if (selectedCategory) {
      setLoading(true);
      axios.post('http://quiz.minedonate.ru/v1/games?include=questions.ranswers', {
        user_id,
        category_id: selectedCategory,
        count: questionsCount,
      })
        .then(({ data: { id, questions } }) => {
          setLoading(false);
          setGameId(id);
          setQuestions(questions);
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  const answerOnQuestion = (answerId) => {
    const questionId = questions[questionIndex].id;
    setAnswers(answers => [...answers, { question_id: questionId, answer_id: answerId }]);
    setQuestionIndex(index => index === questionsLength - 1 ? index : index + 1);
  };

  useEffect(() => {
    console.log("render", answers);
    if (questionIndex === questionsLength - 1) {
      axios.put(`http://quiz.minedonate.ru/v1/games/${gameId}/sdelaju-cherez-god`, { user_id, answers })
        .then(({ data: { right_amount } }) => {
          setResult(right_amount);
        })
        .catch(err => console.log(err))
    }
  }, [answers]);

  return (
    <LinearGradient colors={['#5b86e5', '#36d1dc' ]} style={{ flex: 1, paddingHorizontal: 20 }}>
      <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
      <ScrollView>
        { !questionsLength ? (
          <CategoriesView
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            startGame={startGame}
            setQuestionsCount={setQuestionsCount}
          />
        ) : (
          result === null ? (
            <QuestionsView
              questions={questions}
              questionIndex={questionIndex}
              answerOnQuestion={answerOnQuestion}
            />
          ) : (
            <ResultView
              result={result}
              score={30}
              questionsLength={questionsLength}
              goBack={navigation.goBack}
            />
          )
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({

});

Game.propTypes = {};

export default Game;