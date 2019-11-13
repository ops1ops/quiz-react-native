import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import GeneralTab from './GeneralTab';

export default createMaterialTopTabNavigator({
  General: {
    screen: screenProps => <GeneralTab {...screenProps} />
  },
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

