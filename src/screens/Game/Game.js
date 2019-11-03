import React, { useState } from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import axios from 'axios';
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import MenuButton from "../../components/MenuButton/MenuButton";
import AnswersList from "../../components/AnswersList/AnswersList";

const Game = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const categories = navigation.getParam('categories', []);
  const { id } = navigation.getParam('user', []);

  const startGame = () => {
    console.log(navigation.getParam('user').id, selectedCategory)
    if (selectedCategory) {
      axios.post('http://quiz.minedonate.ru/v1/games?include=questions.ranswers', {
        user_id: id,
        category_id: selectedCategory
      })
        .then(({ data: { questions } }) => {
          setQuestions(questions);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <LinearGradient colors={['#5b86e5', '#36d1dc' ]} style={{ flex: 1, paddingHorizontal: 15 }}>
      <StatusBar backgroundColor="#5b86e5" barStyle="light-content"/>
      { !questions.length ? (
          <View>
            <Text style={styles.title}>
              Select category of questions
            </Text>
            <View style={styles.categoriesContainer}>
              <CategoriesList
                data={categories}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </View>
            <MenuButton text="Start game" onPress={startGame}/>
          </View>
      ) : (
        <View>
          <Text style={styles.progress}>{`${questionIndex + 1}/${questions.length}`}</Text>
          <Text style={styles.question}>{ questions[questionIndex].name }</Text>
          <View>
            <AnswersList
              data={questions[questionIndex].ranswers}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </View>
          <Button title="Prev" onPress={() => setQuestionIndex(index => index === 0 ? index : index - 1)}/>
          <Button title="Next" onPress={() => setQuestionIndex(index => index === questions.length - 1 ? index : index + 1)}/>
        </View>
      )}
    </LinearGradient>
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
    color: 'white',
    fontSize: 15,
    opacity: 0.6
  },
  question: {
    color: 'white',
    fontSize: 20,
    lineHeight: 30
  }
});

Game.propTypes = {};

export default Game;