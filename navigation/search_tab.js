import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
function SearchTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search-tab"
        component={VideoList}
        options={{
          title: 'Youtube Search',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
}

export default SearchTab;
