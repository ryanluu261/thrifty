/* eslint-disable no-alert */
// Image Preview
// Generates an image preview
// Click cross for go back
// Click check mark function undone because need redux or send to backend
// Current it just sends you back to the new post

/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet, View, Image, TouchableOpacity, Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';
import uploadImage from '../services/firebase';

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.route.params.image,
      imageUrl: '',
    };
    this.handleCrossButton = this.handleCrossButton.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  // go back to the first page
  handleCrossButton(e) {
    const popAction = StackActions.pop(1);
    this.props.navigation.dispatch(popAction);
  }

  // reference: https://stackoverflow.com/questions/70194396/firebase-storage-uploads-file-as-9b-file
  // convert local image into a blob and upload to firebase storage.
  async handleImageUpload() {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = (e) => {
        console.log(e);
        reject(new TypeError('Request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', this.state.image.uri, true);
      xhr.send(null);
    });

    uploadImage(blob, (url) => {
      if (url) {
        this.setState(
          { imageUrl: url },
          () => {
            // alert(url);
            this.props.navigation.navigate(
              'NewPost',
              {
                coverUrl: url,
              },
            );
          },
        );
      }
    });
  }

  render() {
    const imageUri = this.state.image.uri;
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={{ flex: 1 }} />
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCrossButton}
          >
            <Ionicons name="close" size={85} style={styles.post_icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleImageUpload}
          >
            <Ionicons
              name="check"
              size={85}
              style={styles.post_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default ImagePreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  post_icon: {
    marginLeft: 3,
    marginRight: 3,
  },
});
