/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableHighlight, Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Camera } from 'expo-camera';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.handleCameraClick = this.handleCameraClick.bind(this);
  }

  async handleCameraClick() {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      this.props.navigation.navigate('CameraPage');
    } else {
      Alert.alert('Access denied!');
    }
  }

  render() {
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="orange"
          onPress={this.handleCameraClick}
        >
          <View style={styles.post_container}>
            <View style={styles.post_button}>
              <Text style={styles.post_text}>Post</Text>
              <Ionicons name="camera" size={26} style={styles.post_icon} color="#fff" />
            </View>
          </View>
        </TouchableHighlight>

        <View>
          <Text style={styles.title}>Welcome, Username</Text>
          <Text style={styles.title}>Image goes here</Text>
        </View>
        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
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
  camera_page_container: {
    flex: 1,
  },
  camera_container: {
    flex: 1,
  },
  camera: {
    width: '100%',
    height: '90%',
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
  take_photo_button: {
    borderRadius: 50,
    height: 85,
    width: 85,
    backgroundColor: '#fff',
  },
});
