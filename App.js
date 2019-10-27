import React from 'react';
import {createAppContainer} from "react-navigation";
import {MainNavigator} from "./src/navigation";

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;
