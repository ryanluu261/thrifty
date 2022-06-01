/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, ScrollView, Modal, TouchableOpacity,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import userGet from '../services/sidequestUser-api';

function QuestTab(props) {
  console.log('quest list page-----------');
  const navigation = useNavigation();
  const [dailyQuest, setDailyQuest] = useState(props.dailyQuest);
  const [modalVisible, setModalVisability] = useState(false);
  const [user, setUser] = useState({
    quests: [{
      title: 'n/a',
    }],
  });
  const [userId, setUserId] = useState('62955568344a64f0f6811392');
  const isFocused = useIsFocused();
  // const [questTitle, setQuestTitle] = useState(dailyQuest.title);
  // ------------ put fetchData here! -------------//
  function fetchUser() {
    userGet(userId)
      .then((responseData) => {
        setUser(
          responseData,
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleQuestPress() {
    setModalVisability(false);
    // setQuestTitle(questTitle);
    navigation.navigate('Camera', { screen: 'NewPost', params: { title: dailyQuest } });
  }

  function handleGroupQuestPress() {
    setModalVisability(true);
    // setQuestTitle('Jump in the river');
    // console.log(questTitle);
  }

  function handleQuestExit() {
    setModalVisability(false);
  }

  useEffect(() => {
    if (isFocused) {
      fetchUser();
      console.log('questList------');
      console.log(user.quests.length);
    }
  }, [isFocused]);

  const groupQuestList = user.quests.map((quest) => (
    <TouchableOpacity
      key={quest}
      onPress={() => handleGroupQuestPress(quest)}
    >
      <View style={styles.friendTask}>
        <Text style={styles.friendBodyTitle}>
          From your group &quot;Ohana&quot;:
        </Text>
        <Text style={styles.friendBodyText}>
          {quest.title}
        </Text>
      </View>
    </TouchableOpacity>
  ));

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Quests
          </Text>
        </View>
        <TouchableOpacity
          style={styles.topwrapper}
          onPress={() => setModalVisability(true)}
        >
          <View style={styles.header}>
            <Text style={styles.boldText}>
              Current quest for today:
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {dailyQuest}
            </Text>
          </View>
        </TouchableOpacity>
        <Modal visible={modalVisible} transparent>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Upload Your Quest Post Here!
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleQuestPress()}
              >
                <Text style={styles.buttonText}>
                  Upload
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonOne}
                onPress={() => handleQuestExit()}
              >
                <Text style={styles.buttonText}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.titleTextTwo}>
          Quests your friends assigned:
        </Text>
        <View style={styles.groupQuestList}>
          {groupQuestList}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirections: 'column',
    background: '#fff',
    alignItems: 'center',
    paddingBottom: 300,
  },
  title: {
    justifyContent: 'left',
    alignItems: 'left',
    paddingRight: 250,
    paddingTop: 50,
    paddingBottom: 40,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  topwrapper: {
    width: 350,
    height: 125,
    backgroundColor: '#FFCC15',
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  boldText: {
    paddingRight: 120,
    fontSize: 15,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#FFCC15',
    alignItems: 'center',
    paddingTop: 20,
    textWrap: 'wrap',

  },
  bodyText: {
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleTextTwo: {
    fontWeight: '600',
    paddingRight: 120,
    paddingTop: 40,
    fontSize: 18,
    paddingBottom: 20,
  },
  friendTask: {
    alignItems: 'center',
    width: 350,
    height: 125,
    backgroundColor: '#B3B3B3',
    borderRadius: 10,
    marginBottom: 15,
  },
  friendBodyTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 20,
    paddingRight: 120,
  },
  friendBodyText: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  modal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    marginTop: 200,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 200,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  modalText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFCC15',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonOne: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFCC15',
    marginTop: 20,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFCC15',
    marginTop: 20,
  },

});

export default QuestTab;
