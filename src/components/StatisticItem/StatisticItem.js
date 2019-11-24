import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'

const StatisticItem = ({ title, value, iconName }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>
      <Text style={styles.value}>
        { value }
      </Text>
      { iconName !== 'Trophy' && <Icon style={styles.icon} name={iconName} size={30} color="#36d1dc"/> }
      { iconName === 'Trophy' && <AntIcon style={styles.icon} name={iconName} size={30} color="#36d1dc"/> }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 15,
    paddingBottom: 4,
  },
  value: {
    // fontWeight: 'bold',
    fontSize: 23,
  },
  icon: {
    position: 'absolute',
    right: '15%',
    bottom: '30%'
  },
});

export default StatisticItem;
