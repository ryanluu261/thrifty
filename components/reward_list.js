/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RewardDetail from './reward_detail';

function RewardList() {
  const navigation = useNavigation();
  const [rewardList, setRewardList] = useState([
    'Auto-complete today\'s taskkk',
    'Set task for a friend',
    'Double rewards for any task',
    'Reroll today\'s task',
    'Hello',
  ]);

  const rewards = rewardList.map((reward) => (
    <TouchableOpacity
      key={reward}
      style={styles.reward}
      onPress={() => {
        navigation.navigate('RewardDetail', { reward });
      }}
    >
      <Text style={styles.text}>{reward}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.profile}>
      <Text style={styles.header}>Rewards</Text>
      <ScrollView style={styles.rewardContainer} horizontal="true">
        <View style={{ flexWrap: 'wrap' }}>{rewards}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    margin: 20,
  },
  rewardContainer: {
    height: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reward: {
    width: '48%',
    height: '25%',
    padding: 20,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: '#FFCC15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RewardList;
