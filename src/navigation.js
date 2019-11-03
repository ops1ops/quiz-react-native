import { createStackNavigator } from 'react-navigation-stack';
import Menu from "./screens/Menu/Menu";
import Game from "./screens/Game/Game";

export const MainNavigator = createStackNavigator({
  Menu: { screen: Menu, navigationOptions: { header: null } },
  Game: { screen: Game },
},{
  initialRouteName: 'Menu',
});
