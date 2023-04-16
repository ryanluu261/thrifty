import React, { useState } from 'react';

import {
  View, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from './post';

function FriendPosts() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([
    {
      photoUrl: require('../assets/post.jpeg'),
      id: 1,
      title: 'Lake photography',
      description: 'No scratches, well conditioned',
      sellerName: 'Ryan Luu',
      sellerPic: require('../assets/keggy.jpeg'),
      sellerRating: 4.5,
      reviewNo: 20,
      transactionNo: 30,
      itemsNo: 15,
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 2,
      title: 'Succulent plant',
      description: 'thriving, had it for 3 month',
      sellerName: '',
      sellerPic: require('../assets/keggy.jpeg'),
      sellerRating: 4.5,
      reviewNo: 20,
      transactionNo: 30,
      itemsNo: 15,
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 3,
      title: 'Meditation carpet',
      description: 'Feels closer to yourself spritually',
      sellerName: '',
      sellerPic: require('../assets/keggy.jpeg'),
      sellerRating: 4.5,
      reviewNo: 20,
      transactionNo: 30,
      itemsNo: 15,
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 4,
      title: 'Hiking boots SZ 10',
      description: 'Worn 3 times, quit hiking lol',
      sellerName: '',
      sellerPic: require('../assets/keggy.jpeg'),
      sellerRating: 4.5,
      reviewNo: 20,
      transactionNo: 30,
      itemsNo: 15,
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 5,
      title: 'A Mile Run',
      description: 'A solid run!',
      sellerName: '',
      sellerPic: require('../assets/keggy.jpeg'),
      sellerRating: 4.5,
      reviewNo: 20,
      transactionNo: 30,
      itemsNo: 15,
    },
    {
      photoUrl: require('../assets/angricat.png'),
      id: 6,
      title: 'Meditation',
      description: 'Feels closer to myself spritually now',
      sellerName: '',
      sellerPic: require('../assets/keggy.jpeg'),
      sellerRating: 4.5,
      reviewNo: 20,
      transactionNo: 30,
      itemsNo: 15,
    },
  ]);
  const renderedPosts = posts.map((post) => (
    <TouchableOpacity
      key={post.id}
      style={styles.postTile}
      onPress={() => {
        navigation.navigate('PostDetail', { post });
      }}
    >
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
