import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RewardDetail(props) {
  const { route } = props;
  const { reward } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Are you sure you want to: </Text>
      <View style={styles.reward}>
        <Text style={styles.rewardText}>{reward}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* cancel button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RewardList')}
        >
          <Text style={{ color: 'white' }}>Cancel</Text>
        </TouchableOpacity>
        {/* Continue button */}
        <TouchableOpacity style={[styles.button, styles.contBtn]}>
          <Text style={{ color: 'white' }}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 35,
  },
  reward: {
    height: '60%',
    padding: 20,
    backgroundColor: '#FFCC15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    flex: -1,
    width: '30%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  contBtn: {
    backgroundColor: 'blue',
  },
});

export default RewardDetail;
