/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
// import { useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendPosts from './friend_posts';
import PostDetail from './post_detail';

const Stack = createStackNavigator();

function PostScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FriendPosts'
        component={FriendPosts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PostDetail'
        component={PostDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default PostScreen;
