import React from 'react';
import {createAppContainer} from "react-navigation";
import {MainNavigator} from "./src/navigation";
import {Alert, Modal, ScrollView, Text, TouchableHighlight, View} from "react-native";

export default createAppContainer(MainNavigator);

{/*<ProgressBarAndroid />*/}