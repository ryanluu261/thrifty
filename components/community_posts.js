import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';
import Post from './post';
import postsGet from '../services/sidequestPost-api';

// const postDetails1 = {
//   photoUrl: 'https://facebook.github.io/react/logo-og.png',
//   id: 'Bruh',
//   title: 'Sunrike',
//   description: 'Had the best times with my fav ppl',
// };

// const postDetails2 = {
//   photoUrl: 'https://facebook.github.io/react/logo-og.png',
//   id: 'Moe',
//   title: 'A Mile Run',
//   description: 'A solid run!',
// };

// const postDetails3 = {
//   uri: 'https://facebook.github.io/react/logo-og.png',
//   userName: 'Billy',
//   questName: 'Meditation',
//   questDetails: 'Feels closer to myself spritually now',
// };

function CommunityPosts(props) {
  console.log('home page-----------');

  function fetchPosts() {
    postsGet()
      .then((responseData) => {
        setPostList({
          responseData,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  const [postList, setPostList] = useState({ responseData: [] });

  useEffect(() => {
    fetchPosts();
    console.log('useEffect ran-----');
  }, []);

  // const postList = props.route.params;

  console.log('postList----------start');
  console.log(postList.responseData);
  console.log('postList----------end');
  // const newList = postList[0];

  const posts = postList.responseData.map((post, i) => (
    // eslint-disable-next-line react/no-array-index-key
    // console.log(post)
    <Post key={post.id} style={styles.post} postDetails={post} />
  ));

  return (

    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {posts}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default CommunityPosts;
