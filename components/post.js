import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Post(props) {
  const { postDetails } = props;

  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={postDetails.photoUrl}
        // source={{
        //   uri: 'https://reactnative.dev/img/tiny_logo.png',
        // }}
        // source={require('../assets/angricat.png')}
      />
      <View style={styles.postDetails}>
        <Text style={styles.questName}>{postDetails.title}</Text>
        <Text style={styles.questDetails}>{postDetails.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    marginBottom: 30,
    paddingBottom: 10,
  },
  postDetails: {
    marginTop: 8,
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
  userName: {
    color: 'grey',
  },
  questName: {
    fontWeight: 'bold',
  },
  questDetails: {
    height: 'auto',
    // wordWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});

export default Post;
