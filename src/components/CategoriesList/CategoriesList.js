import React, { useState, useCallback } from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const CategoriesList = ({ data, selectedCategory, setSelectedCategory}) => (
  <FlatList
    data={data}
    renderItem={({item: {name, id}}) => (
      <Text
        style={{ ...styles.categoryItem, ...(selectedCategory === id ? styles.selectedCategory : {})}}
        onPress={() => setSelectedCategory(id)}
      >
        {name}
      </Text>
    )}
  />
);

const styles = StyleSheet.create({
  categoryItem: {
    lineHeight: 50,
    fontSize: 18,
    height: 50,
    backgroundColor: 'white',
  },
  selectedCategory: {
    color: '#5b86e5',
    fontWeight: 'bold'
  }
});

export default CategoriesList;