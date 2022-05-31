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
      <View style={[styles.container, styles.shadowProp]}>
        <Image style={styles.image} source={{ uri: this.postDetails.uri }} />
        <View style={styles.postDetails}>
          <Text style={styles.userName}>{this.postDetails.userName}</Text>
          <Text style={styles.questName}>{this.postDetails.questName}</Text>
          <Text style={styles.questDetails}>
            {this.postDetails.questDetails}
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
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: 'black',
    marginBottom: 30,
    paddingBottom: 10,
  },
  postDetails: {
    paddingTop: 5,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  userName: {
    color: 'grey',
  },
  questName: {
    fontWeight: 'bold',
  },
  questDetails: {},
  image: {
    width: 350,
    height: 200,
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
