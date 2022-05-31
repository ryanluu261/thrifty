/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
import React, { Component } from 'react';
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
import userGet from '../services/sidequestUser-api';
import postsGet from '../services/sidequestPost-api';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class MainTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      posts: [],
      id: '629556c1c7201ffe57a8e1ef',
    };
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchPosts();
  }

  // ------------ put fetchData here! -------------//
  fetchUser() {
    userGet(this.state.id)
      .then((responseData) => {
        this.setState({
          user: responseData,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  fetchPosts() {
    postsGet()
      .then((responseData) => {
        this.setState({
          posts: responseData,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log('main tab bar state print----------------');
    return (
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          initialRouteName="Quest"
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
          <Stack.Screen name="Home" options={headerStyle} component={HomeTab} initialParams={this.state.posts} />
          <Stack.Screen name="Search" options={headerStyle} component={SearchTab} />
          <Stack.Screen name="Quest" options={headerStyle} component={QuestTab} />
          <Stack.Screen name="Groups" options={headerStyle} component={GroupTab} />
          <Stack.Screen name="Profile" options={headerStyle} component={ProfileTab} initialParams={this.state.user} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
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
    height: 50,
    elevation: 10,
    borderColor: '#000000',
    opacity: 1,
  },
  headerTitleStyle: {
    color: '#000000',
  },
};
export default MainTabBar;
