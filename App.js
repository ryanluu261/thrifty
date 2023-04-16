import React from 'react';
import { LogBox } from 'react-native';
import MainTabBar from './navigation/main_tab_bar';

LogBox.ignoreAllLogs();

function App(props) {
  return <MainTabBar />;
}

export default App;
