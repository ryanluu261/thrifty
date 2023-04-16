import React, { useState, useEffect } from 'react';

import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from './post';
import { getPosts } from '../services/fakePosts';
import { CartIcon } from './cart_icon';

function FriendPosts() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  });

  const renderedPosts = posts.map((post) => (
    <TouchableOpacity
      key={post.id}
      style={styles.postTile}
      onPress={() => {
        navigation.navigate('PostDetail', { postID: post.id });
      }}>
      <Post key={post.id} postDetails={post} />
    </TouchableOpacity>
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
    flexBasis: '45%',
    height: '30%',
  },
});

export default FriendPosts;
