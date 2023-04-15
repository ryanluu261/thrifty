import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Post extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.postDetails);
    // const { postDetails } = this.props;
    const { postDetails } = this.props;
    this.postDetails = postDetails;
    // postDetails = this.
    // this.state = this.
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={this.postDetails.photoUrl}
          // source={{
          //   uri: 'https://reactnative.dev/img/tiny_logo.png',
          // }}
          // source={require('../assets/angricat.png')}
        />
        <View style={styles.postDetails}>
          <Text style={styles.userName}>{this.postDetails.photoUrl}</Text>
          <Text style={styles.questName}>{this.postDetails.title}</Text>
          <Text style={styles.questDetails}>
            {this.postDetails.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '45%',
    height: '30%',
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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default Post;
