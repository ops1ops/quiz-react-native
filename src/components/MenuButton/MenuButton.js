import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const MenuButton = ({ text, containerStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...containerStyle }}
      onPress={onPress}
    >
      <Text style={{ ...styles.text, ...textStyle }}>
        { text }
      </Text>
    </TouchableOpacity>
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
  text: {
    fontSize: 23,
    color: 'gray'
  },
});

MenuButton.propTypes = {};

export default MenuButton;