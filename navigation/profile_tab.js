import React, { Component, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import RewardList from '../components/reward_list';
import RewardDetail from '../components/reward_detail';

const Stack = createStackNavigator();

function ProfileTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RewardList'
        component={RewardList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='RewardDetail'
        component={RewardDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProfileTab;
