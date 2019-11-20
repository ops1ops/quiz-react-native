import React, {useContext} from 'react';
import {UserInfoContext} from "./Profile";
import {
  Image, ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import {ListItem} from "react-native-elements";

const HistoryTab = () => {
  const { userInfo: { games = [] }, navigate } = useContext(UserInfoContext);
  console.log(navigate)
  return (
    <ScrollView>
      { games.length ?
        games.map(({ created, amount, right_amount, id }, index) => (
          <TouchableOpacity>
            <ListItem
              key={index}
              title={`Answered ${right_amount}/${amount}`}
              leftElement={<Text style={{ fontSize: 20, fontWeight: 'bold' }}>1</Text>}
              subtitle={created}
              onPress={() => navigate('Game', { id })}
              bottomDivider
              chevron
            />
          </TouchableOpacity>
        )) : (
          <Text style={styles.text}>You have not played games yet.</Text>
        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 30,
    textAlign: 'center'
  },
  container: {
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

export default HistoryTab;