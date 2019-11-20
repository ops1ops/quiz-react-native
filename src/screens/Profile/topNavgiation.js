import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import GeneralTab from './GeneralTab';
import HistoryTab from "./HistoryTab";

export default createMaterialTopTabNavigator({
  General: GeneralTab,
  History: HistoryTab
}, {
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: '#36d1dc',
    },
  }
});

