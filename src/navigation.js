import { createStackNavigator } from 'react-navigation-stack';
import Menu from "./screens/Menu/Menu";
import Game from "./screens/Game/Game";
import Profile from "./screens/Profile/Profile";
import HistoryGamePage from "./screens/HistoryGamePage/HistoryGamePage";

export const MainNavigator = createStackNavigator({
  Menu: { screen: Menu, navigationOptions: { header: null } },
  Game: { screen: Game, navigationOptions: { header: null } },
  HistoryGamePage: { screen: HistoryGamePage, navigationOptions: { header: null } },
  Profile: { screen: Profile, navigationOptions: { header: null }  },

},{
  initialRouteName: 'Menu',
});
