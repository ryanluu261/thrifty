import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

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
          style={styles.image}
          source={{ uri: this.postDetails.photoUrl }}
        />
        <View style={styles.postDetails}>
          <Text style={styles.userName}>
            {this.postDetails.id}
          </Text>
          <Text style={styles.questName}>
            {this.postDetails.title}
          </Text>
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
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    borderWidth: 5,
    borderColor: 'black',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginBottom: 30,
    paddingBottom: 10,
  },
  postDetails: {
    paddingTop: 5,
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
    height: 650,
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
