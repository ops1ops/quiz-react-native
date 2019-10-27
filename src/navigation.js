import { createStackNavigator } from 'react-navigation-stack';
import Auth from "./screens/Auth/Auth";
import Game from "./screens/Game/Game";

export const MainNavigator = createStackNavigator({
  Auth: {screen: Auth},
  Game: {screen: Game},
});
