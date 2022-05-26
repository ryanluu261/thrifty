import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CameraPage from './camera_page';
import NewPost from './new_post';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{
          title: 'New Post',
        }}
      />
      <Stack.Screen name="CameraPage" component={CameraPage} />
    </Stack.Navigator>
  );
}

export default CameraStack;
