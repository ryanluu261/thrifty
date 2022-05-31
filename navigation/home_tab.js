import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';
import Post from '../components/post';

const postDetails1 = {
  photoUrl: 'https://facebook.github.io/react/logo-og.png',
  id: 'Bruh',
  title: 'Sunrike',
  description: 'Had the best times with my fav ppl',
};

const postDetails2 = {
  photoUrl: 'https://facebook.github.io/react/logo-og.png',
  id: 'Moe',
  title: 'A Mile Run',
  description: 'A solid run!',
};

const postDetails3 = {
  uri: 'https://facebook.github.io/react/logo-og.png',
  userName: 'Billy',
  questName: 'Meditation',
  questDetails: 'Feels closer to myself spritually now',
};

function HomeTab(props) {
  console.log('home page-----------');
  console.log(props.route.params);
  return (

    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {/* <Text>
          {' '}
          {props.route.params[0].title}
        </Text> */}
        <Post style={styles.post} postDetails={postDetails1} />
        <Post style={styles.post} postDetails={postDetails2} />
        <Post style={styles.post} postDetails={props.route.params[0]} />
        {/* <Post style={styles.post} postDetails={postDetails3} />
        <Post style={styles.post} postDetails={postDetails2} />
        <Post style={styles.post} postDetails={postDetails1} /> */}
      </View>
    </ScrollView>

  );
}
// }

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
