import React, {useContext} from 'react';
import {UserInfoContext} from "./Profile";
import StatisticItem from "../../components/StatisticItem/StatisticItem";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GeneralTab = () => {
  const { userInfo: { rating, statistic = { score: { total: 0, percent: 0 }, total_count: { games: 0 } }} } = useContext(UserInfoContext);
  const { score: { total, percent }, total_count: { games } } = statistic;

  return (
    <View style={styles.container}>
      <StatisticItem title="Games" value={games} iconName="gamepad"/>
      { rating && <StatisticItem title="Ladder position" value={rating} iconName="Trophy"/> }
      <StatisticItem title="Total answered" value={total} iconName="question-circle"/>
      <StatisticItem title="Right answered" value={`${percent}%`} iconName="check"/>
      {/*<StatisticItem title="Right answers" value={statistic.percent} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 25,
  }
});

export default GeneralTab;