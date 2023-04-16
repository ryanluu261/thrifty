import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SellerInfo from './seller_info';

function PostDetail(props) {
  const { route } = props;
  const { post } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FriendPosts')}>
        <Text style={{ color: 'white' }}>Back</Text>
      </TouchableOpacity>
      <View style={styles.bigPost}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={post.photoUrl}
        />
        <View style={styles.postDetails}>
          <Text style={styles.questName}>{post.title}</Text>
          <Text style={styles.questDetails}>{post.description}</Text>
        </View>
        <SellerInfo seller={post} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bigPost: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
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
  button: {
    flex: -1,
    width: '30%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
});

export default PostDetail;
