import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';

import Post from './post';

function CommunityPosts() {
  const [posts, setPosts] = useState([
    {
      uri: 'https://facebook.github.io/react/logo-og.png',
      userName: 'Bob',
      questName: 'Sunrike',
      questDetails: 'Had the best times with my fav ppl',
    },
    {
      uri: 'https://facebook.github.io/react/logo-og.png',
      userName: 'Moe',
      questName: 'A Mile Run',
      questDetails: 'A solid run!',
    },
    {
      uri: 'https://facebook.github.io/react/logo-og.png',
      userName: 'Billy',
      questName: 'Meditation',
      questDetails: 'Feels closer to myself spritually now',
    },
  ]);

  const renderedPosts = posts.map((post) => (
    <Post key={post.userName} postDetails={post} />
  ));

  return (
    <ScrollView style={{ height: '100%' }}>
      <View style={styles.container}>{renderedPosts}</View>
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
