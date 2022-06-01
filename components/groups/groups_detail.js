import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal, Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import EnIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import Message from './message';
import { userUpdate } from '../../services/sidequestUser-api';

function GroupsDetail(props) {
  const { route } = props;
  const { group } = route.params;
  const [modalVisible, setModalVisability] = useState(false);
  const [id, setId] = useState('62955568344a64f0f6811392');
  const [questId, setQuestId] = useState('629799cf67498e87ecbecfd0');

  const navigation = useNavigation();

  const renderedMembers = group.members.map((member) => {
    return (
      <Text key={member.name}>
        {member.name}
        ,
        {' '}
      </Text>
    );
  });

  function addTask() {
    setModalVisability(false);
    userUpdate(id, { quests: [questId] });
    // eslint-disable-next-line no-alert
    alert('Task Added');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.groupHeader}>
          <ADIcon
            name="arrowleft"
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.groupInfo}>
            <Text style={styles.groupName}>{group.name}</Text>
            <View style={styles.groupMembers}>{renderedMembers}</View>
          </View>
          <EnIcon name="phone" style={styles.groupIcon} />
          <EnIcon name="video-camera" style={styles.groupIcon} />
          <FAIcon name="ellipsis-v" style={styles.groupIcon} />
        </View>
        <Message type="friends" />
        <Message type="friends" />

        <Text style={styles.joinGroup}>Tim just joined tha group</Text>

        <Message type="self" />
        <TouchableOpacity
          onPress={() => setModalVisability(true)}
        >
          <View style={styles.groupQuest}>
            <Text style={styles.questHeader}> Group Quest: </Text>
            <Text style={styles.questTitle}>  Jump in the river </Text>
          </View>
        </TouchableOpacity>
        <Message type="self" />
        <Message type="friends" />
      </View>
      <Modal visible={modalVisible} transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitle}>
              <Text style={styles.modalText}>
                Group Quest:
              </Text>
              <Text style={styles.modalNameText}>
                Jump in the River
              </Text>
            </View>
            <Text style={styles.modalDetailsText}>
              Description:
            </Text>
            <Text>
              Come to the river at 2 PM and jump in!!!
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => addTask()}
              >
                <Text style={styles.buttonText}>
                  Accept
                </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisability(false)}
              >
                <Text style={styles.buttonText}>
                  Decline
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

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
  groupQuest: {
    backgroundColor: '#FFCC15',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    width: '100%',
    height: 75,
    opacity: 0.8,
  },
  questHeader: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  questTitle: {
    marginBottom: 5,
    fontSize: 20,
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
    borderRadius: 3,
    color: '#FFCC15',
  },
  modal: {
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    flex: 1,
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    // marginTop: '60%',
    marginLeft: 30,
    marginRight: 30,
    // marginBottom: '60%',
    height: 200,
    padding: 40,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalNameText: {
    fontSize: 18,
  },
  modalDetailsText: {
    fontSize: 17,
    color: 'gray',
  },
  modalTitle: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#FFCC15',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default GroupsDetail;
