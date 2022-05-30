/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons';
// eslint-disable-next-line import/no-unresolved
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
// import About from '../components/about';
import SearchTab from './search_tab';
import HomeTab from './home_tab';
import GroupTab from './groups_tab';
import ProfileTab from './profile_tab';
import QuestTab from './quest_tab';

const Tab = createBottomTabNavigator();

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

            return <Ionicons name={iconName} size={26} color={focused ? '#FFFFFF' : '#000000'} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Quest" component={QuestTab} />
        <Tab.Screen name="Groups" component={GroupTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: '#FFFFFF',
    background: 'rgb(242, 242, 242)',
    card: '#FFCC15',
    text: '#000000',
    border: 'rgb(242, 242, 242)',
    notification: 'rgb(242, 242, 242)',
  },
};

export default MainTabBar;
