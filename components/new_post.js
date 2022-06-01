// New Post Element
// Contains a new post button that leads to a camera

/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, Alert, TextInput, ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Camera } from 'expo-camera';
import { createPost } from '../services/createPost';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      coverUrl: '',
      title: props.route.params.title,
      caption: '',
    };

    this.handleCameraClick = this.handleCameraClick.bind(this);
    this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
    this.handleDetailsTextChange = this.handleDetailsTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    if (this.state.coverUrl !== ''
    && this.state.caption !== '') {
      const fields = {
        title: this.state.title,
        description: this.state.caption,
        photoUrl: this.state.coverUrl,
        likes: 0,
      };
      createPost(fields);
    } else {
      alert('Please enter all fields & take a photo! ');
    }
  }

  render() {
    const { image } = this.state;
    const { coverUrl } = this.state;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View>
            <Text
              style={styles.input_title}
            >
              {this.state.title}
            </Text>
            <TextInput
              style={styles.input_box}
              onChangeText={(text) => { this.handleDetailsTextChange(text); }}
              value={this.state.caption}
              placeholder="Write a detailed description for your quest..."
            />

            <Image style={styles.image} source={{ uri: coverUrl || 'https://facebook.github.io/react/logo-og.png' }} />
            <TouchableOpacity
              underlayColor="orange"
              onPress={this.handleSubmit}
            >
              <View style={styles.button_container}>
                <View style={this.state.coverUrl === '' ? styles.submit_button_gray : styles.submit_button}>
                  <Text style={styles.submit_text}>Submit</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: (3, 5, 3, 5),
  },
  submit_button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#FFCC15',
    borderRadius: 10,
  },
  submit_button_gray: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#94928e',
    borderRadius: 10,
  },
  submit_text: {
    color: '#000',
    marginRight: 3,
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 20,
  },

});
