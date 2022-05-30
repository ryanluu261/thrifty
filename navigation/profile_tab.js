/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createStackNavigator } from '@react-navigation/stack';
import RewardList from '../components/reward_list';
import StatScreen from '../components/stat_screen';
import RewardDetail from '../components/reward_detail';

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

const renderScene = SceneMap({
  first: StatScreen,
  second: RewardScreen,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#ffad15' }}
  />
);

export default function ProfileTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Stats' },
    { key: 'second', title: 'Inventory' },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
