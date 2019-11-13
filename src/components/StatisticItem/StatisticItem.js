import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const StatisticItem = ({ title, value }) => {
  return (
    <View>
      <Text style={styles.title}>

      </Text>
      <Text style={styles.value}>

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    color: 'gray'
  },
  value: {
    fontSize: 23,
    color: 'gray'
  },
  icon: {

  },
});

export default StatisticItem;
