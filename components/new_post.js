// New Post Element
// Contains a new post button that leads to a camera

/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, Alert, TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Camera } from 'expo-camera';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      coverUrl: '',
      title: '',
      caption: '',
    };

    this.handleCameraClick = this.handleCameraClick.bind(this);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
    this.handleDetailsTextChange = this.handleDetailsTextChange.bind(this);
  }

  componentDidUpdate() {
    try {
      const url = this.props.route.params.coverUrl;
      this.setState({ coverUrl: url });
    } catch (error) {
      // do nothing
    }
  }

  async handleCameraClick() {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      this.props.navigation.navigate('CameraPage');
    } else {
      Alert.alert('Access denied!');
    }
  }

  handleTitleTextChange(text) {
    this.setState({ title: text });
  }

  handleDetailsTextChange(text) {
    this.setState({ caption: text });
  }

  render() {
    const { image } = this.state;
    const { coverUrl } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          underlayColor="orange"
          onPress={this.handleCameraClick}
        >
          <View style={styles.post_container}>
            <View style={styles.post_button}>
              <Text style={styles.post_text}>Post</Text>
              <Ionicons name="camera" size={26} style={styles.post_icon} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>

        {/* <View>
          <Text style={styles.title}>Welcome, Username</Text>
          <Text style={styles.title}>Image goes here</Text>
        </View> */}
        <View>
          <TextInput
            style={styles.input_title}
            onChangeText={(text) => { this.handleTitleTextChange(text); }}
            value={this.state.title}
            placeholder="Title"
          />
          <TextInput
            style={styles.input_box}
            onChangeText={(text) => { this.handleDetailsTextChange(text); }}
            value={this.state.caption}
            placeholder="Write a detailed description for your quest..."
            // keyboardType="text"
          />

          <Image style={styles.image} source={{ uri: coverUrl || 'https://facebook.github.io/react/logo-og.png' }} />
        </View>
        {/* <Text>{coverUrl}</Text> */}
      </View>
    );
  }
}

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  post_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: (3, 5, 3, 5),
  },
  post_button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    backgroundColor: '#0053CF',
    borderRadius: 10,
  },
  post_text: {
    color: '#fff',
    marginRight: 3,
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 18,
  },
  post_icon: {
    marginLeft: 3,
    marginRight: 3,
  },
  image: {
    width: '90%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  input_title: {
    width: '100%',
    height: 50,
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  input_box: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    width: '100%',
    height: 50,
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
    // paddingLeft: 8,
    // paddingRight: 8,
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'black',
  },
});
