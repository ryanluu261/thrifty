import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

function GroupsList() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState([
    {
      name: 'O\'hana',
      description: 'Means family',
      members: [
        {
          name: 'Ryan',
          avatar: '',
        },
        {
          name: 'Zhoucai',
          avatar: '',
        },
        {
          name: 'Syed',
          avatar: '',
        },
      ],
    },
    {
      name: 'Sunrikerss',
      description: 'Sunrike every Sunday',
      members: [
        {
          name: 'Ke Lou',
          avatar: '',
        },
        {
          name: 'Kashan',
          avatar: '',
        },
      ],
    },
    {
      name: 'Presentation group',
      description: 'Group for Tim\'s birthday',
      members: [
        {
          name: 'A',
          avatar: '',
        },
        {
          name: 'B',
          avatar: '',
        },
        {
          name: 'C',
          avatar: '',
        },
        {
          name: 'D',
          avatar: '',
        },
        {
          name: 'E',
          avatar: '',
        },
      ],
    },
    {
      name: 'Go upvote my post b**ches',
      description: 'Timmy’s turn to rank first this week',
      members: [
        {
          name: 'Tim',
          avatar: '',
        },
        {
          name: 'Timmy',
          avatar: '',
        },
        {
          name: 'Timothy',
          avatar: '',
        },
        {
          name: 'Timtim',
          avatar: '',
        },
      ],
    },
  ]);

  const renderedGroups = groups.map((group) => (

    <TouchableOpacity
      key={group.name}
      style={styles.groupCard}
      onPress={() => {
        navigation.navigate('GroupsDetail', { group });
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
      />
      <View style={styles.groupContents}>
        <Text style={styles.groupName}>{group.name}</Text>
        <Text style={styles.groupDescrip}>{group.description}</Text>
        <Text style={styles.groupNum}>
          {group.members.length.toString()}
          {' '}
          members
        </Text>
      </View>
      <Ionicons name="right" style={styles.groupIcon} />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Groups
      </Text>
      {renderedGroups}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  groupCard: {
    flexDirection: 'row',
    height: '15%',
    alignItems: 'center',
    backgroundColor: '#FFCC15',
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 20,
  },
  image: {
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 10,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  groupNum: {
    marginTop: 5,
    color: '#413b47',
  },
  groupIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  groupContents: {},
});

export default GroupsList;
