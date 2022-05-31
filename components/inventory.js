/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
// import { useWindowDimensions } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { createStackNavigator } from '@react-navigation/stack';
import RewardList from './reward_list';
import RewardDetail from './reward_detail';

const Stack = createStackNavigator();

function RewardScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RewardList"
        component={RewardList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RewardDetail"
        component={RewardDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    style={{ backgroundColor: '#FFCC15', color: 'black' }}
    labelStyle={{ color: 'black', fontWeight: 'bold' }}
  />
);

export default RewardScreen;
