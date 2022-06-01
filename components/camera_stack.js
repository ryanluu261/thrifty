/* eslint-disable import/no-cycle */
// Camera Stack Component
// Contains the new post, camera page, and image preview
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CameraPage from './camera_page';
import NewPost from './new_post';
import ImagePreview from './image_preview';
import QuestTab from '../navigation/quest_tab';

const Stack = createStackNavigator();

function CameraStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="NewPost"
        component={QuestTab}
        options={{
          title: 'New Post',
        }}
      />
      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen name="CameraPage" component={CameraPage} />
      <Stack.Screen name="ImagePreview" component={ImagePreview} />
    </Stack.Navigator>
  );
}

export default CameraStack;
