import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GroupsList from '../components/groups/groups_list';
import GroupsDetail from '../components/groups/groups_detail';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
function GroupsTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Groups' component={GroupsList} />
      <Stack.Screen name='GroupsDetail' component={GroupsDetail} />
    </Stack.Navigator>
  );
}

export default GroupsTab;
