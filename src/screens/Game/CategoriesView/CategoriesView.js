import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import CategoriesList from "../../../components/CategoriesList/CategoriesList";
import MenuButton from "../../../components/MenuButton/MenuButton";
import RadioForm from "react-native-simple-radio-button";

const radio_props = [
  {label: '5', value: 5 },
  {label: '10', value: 10 }
];

const CategoriesView = ({ categories, setSelectedCategory, selectedCategory, startGame, setQuestionsCount }) => {
  return (
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
      <Text style={styles.title}>
        Select number of questions
      </Text>
      <RadioForm
        style={{ justifyContent: 'space-around'}}
        radio_props={radio_props}
        labelStyle={{fontSize: 18, color: 'white'}}
        onPress={(count) => setQuestionsCount(count)}
        buttonColor="white"
        selectedButtonColor="#5b86e5"
        buttonSize={25}
        formHorizontal={true}
        animation={false}
      />
      <MenuButton text="Start game" onPress={startGame}/>
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
  }
});

CategoriesView.propTypes = {};

export default CategoriesView;