import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import EnIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Message from './message';
import { ScrollView } from 'react-native-gesture-handler';

const GroupsDetail = (props) => {
  const { route } = props;
  const { group } = route.params;

  const navigation = useNavigation();

  const renderedMembers = group.members.map((member) => {
    return <Text>{member.name}, </Text>;
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.groupHeader}>
          <ADIcon
            name='arrowleft'
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.groupInfo}>
            <Text style={styles.groupName}>{group.name}</Text>
            <View style={styles.groupMembers}>{renderedMembers}</View>
          </View>
          <EnIcon name='phone' style={styles.groupIcon} />
          <EnIcon name='video-camera' style={styles.groupIcon} />
          <FAIcon name='ellipsis-v' style={styles.groupIcon} />
        </View>
        <Message type='friends' />
        <Message type='friends' />

        <Text style={styles.joinGroup}>Tim just joined tha group</Text>

        <Message type='self' />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 25,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  backIcon: {
    marginRight: 'auto',
    fontSize: 24,
  },
  groupIcon: {
    marginLeft: 'auto',
    fontSize: 24,
  },
  groupMembers: {
    flexDirection: 'row',
  },
  groupInfo: {
    marginRight: 'auto',
  },
  joinGroup: {
    backgroundColor: '#f5eed1',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '60%',
    fontWeight: 'bold',
    padding: 5,
    borderRadius: '30%',
    color: '#FFCC15',
  },
});

export default GroupsDetail;
