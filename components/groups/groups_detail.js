import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GroupsDetail = (props) => {
  const { route } = props;
  const { group } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>{group.name}</Text>
    </View>
  );
};

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

export default GroupsDetail;
