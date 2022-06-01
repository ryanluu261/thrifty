import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';

import Post from './post';

function FriendPosts() {
  const [posts, setPosts] = useState([
    {
      photoUrl: 'https://facebook.github.io/react/logo-og.png',
      id: 'Bob',
      title: 'Sunrike',
      description: 'Had the best times with my fav ppl',
    },
    {
      photoUrl: 'https://facebook.github.io/react/logo-og.png',
      id: 'Moe',
      title: 'A Mile Run',
      description: 'A solid run!',
    },
    {
      photoUrl: 'https://facebook.github.io/react/logo-og.png',
      id: 'Billy',
      title: 'Meditation',
      description: 'Feels closer to myself spritually now',
    },
  ]);
  const renderedPosts = posts.map((post) => (
    <Post key={post.id} postDetails={post} />
  ));

  return (
    <ScrollView style={{ height: '100%' }}>
      <View style={styles.container}>{renderedPosts}</View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default FriendPosts;
