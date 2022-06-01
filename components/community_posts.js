import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Post from './post';
import postsGet from '../services/sidequestPost-api';

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
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchPosts();
      // console.log('useEffect ran-----');
    }
  }, [isFocused]);

  // console.log('postList----------start');
  // console.log(postList.responseData.length);
  // console.log('postList----------end');

  const posts = postList.responseData.map((post, i) => (
    // eslint-disable-next-line react/no-array-index-key
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
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default CommunityPosts;
