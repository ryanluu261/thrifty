import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';

import Post from './post';

function FriendPosts() {
  const [posts, setPosts] = useState([
    {
      photoUrl: require('../assets/post.jpeg'),
      id: 'Bob',
      title: 'Sunrike',
      description: 'Had the best times with my fav ppl',
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 'Moe',
      title: 'A Mile Run',
      description: 'A solid run!',
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 'Billy',
      title: 'Meditation',
      description: 'Feels closer to myself spritually now',
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 'Bob',
      title: 'Sunrike',
      description: 'Had the best times with my fav ppl',
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 'Moe',
      title: 'A Mile Run',
      description: 'A solid run!',
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 'Billy',
      title: 'Meditation',
      description: 'Feels closer to myself spritually now',
    },
  ]);
  const renderedPosts = posts.map((post) => (
    <Post style={styles.postTile} key={post.id} postDetails={post} />
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  postTile: {
    // flexBasis: '50%',
    // width: '50%',
  },
});

export default FriendPosts;
