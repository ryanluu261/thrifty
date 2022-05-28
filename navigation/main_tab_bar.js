/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
// import About from '../components/about';
import { createStackNavigator } from '@react-navigation/stack';
import SearchTab from './search_tab';
import HomeTab from './home_tab';
import GroupTab from './groups_tab';
import ProfileTab from './profile_tab';
import QuestTab from './quest_tab';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabBar() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'account-search';
            } else if (route.name === 'Quest') {
              iconName = 'sword-cross';
            } else if (route.name === 'Groups') {
              iconName = 'account-group';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            }

            return (
              <Ionicons
                name={iconName}
                size={26}
                color={focused ? '#FFFFFF' : '#000000'}
              />
            );
          },
        })}
      >
        <Stack.Screen name="Home" options={headerStyle} component={HomeTab} />
        <Stack.Screen name="Search" options={headerStyle} component={SearchTab} />
        <Stack.Screen name="Quest" options={headerStyle} component={QuestTab} />
        <Stack.Screen name="Groups" options={headerStyle} component={GroupTab} />
        <Stack.Screen name="Profile" options={headerStyle} component={ProfileTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: true,
  colors: {
    primary: '#FFFFFF',
    background: 'rgb(242, 242, 242)',
    card: '#FFCC15',
    text: '#000000',
    border: 'rgb(242, 242, 242)',
    notification: 'rgb(242, 242, 242)',
  },
};

const headerStyle = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#FFCC15',
    height: 90,
    elevation: 10,
    borderColor: '#000000',
    opacity: 1,
  },
  headerTitleStyle: {
    color: '#000000',
  },
};
export default MainTabBar;
