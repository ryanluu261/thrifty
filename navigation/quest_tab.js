import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class QuestTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Quests
          </Text>
        </View>
        <View style={styles.topwrapper}>
          <View style={styles.header}>
            <Text style={styles.boldText}>
              Current quest for today:
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              Go on a sunrike with your friends
            </Text>
          </View>
        </View>
        <Text style={styles.titleTextTwo}>
          Quests your friends assigned:
        </Text>
        <View style={styles.friendTask}>
          <Text style={styles.friendBodyTitle}>
            From your group &quot;blank&quot;:
          </Text>
          <Text style={styles.friendBodyText}>
            The task is blank
          </Text>
        </View>
      </View>
    );
  }
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
    height: 175,
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

});

export default QuestTab;
