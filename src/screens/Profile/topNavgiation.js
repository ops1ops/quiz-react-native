import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import GeneralTab from './GeneralTab';

export default createMaterialTopTabNavigator({
  General: GeneralTab,
  History: GeneralTab
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

