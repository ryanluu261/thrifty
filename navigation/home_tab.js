import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView,
} from 'react-native';
import Post from '../components/post';
import ModalTab from './modal_tab';

const postDetails1 = {
  uri: 'https://facebook.github.io/react/logo-og.png',
  userName: 'Bob',
  questName: 'Sunrike',
  questDetails: 'Had the best times with my fav ppl',
};

const postDetails2 = {
  uri: 'https://facebook.github.io/react/logo-og.png',
  userName: 'Moe',
  questName: 'A Mile Run',
  questDetails: 'A solid run!',
};

const postDetails3 = {
  uri: 'https://facebook.github.io/react/logo-og.png',
  userName: 'Billy',
  questName: 'Meditation',
  questDetails: 'Feels closer to myself spritually now',
};

class HomeTab extends Component {
  render() {
    return (

      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Post style={styles.post} postDetails={postDetails1}> </Post>
          <Post style={styles.post} postDetails={postDetails2} />
          <Post style={styles.post} postDetails={postDetails3} />
          <Post style={styles.post} postDetails={postDetails2} />
          <Post style={styles.post} postDetails={postDetails1} />
        </View>
        <ModalTab />
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
  },
  post: {
    margin: 100,
  },
});

export default HomeTab;
