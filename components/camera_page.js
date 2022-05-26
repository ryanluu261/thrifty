/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Camera, CameraType } from 'expo-camera';

class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      cameraType: CameraType.back,
    };

    this.camera = React.createRef();
    this.takePicture = this.takePicture.bind(this);
  }

  async takePicture() {
    if (this.camera) {
      const photo = await this.camera.current.takePictureAsync(null);
      this.setState({
        image: photo.uri,
      });

      // this.props.navigation.navigate(
      //   'ImagePreview',
      //   {
      //     image: this.state.image,
      //   },
      // );
    }
  }

  render() {
    const { cameraType } = this.state;

    return (
      <View styles={styles.camera_page_container}>
        <View styles={styles.camera_container}>
          <Camera
            ref={this.camera}
            type={cameraType}
            style={styles.camera}
          />
        </View>
        <View style={styles.camera_bottom_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              cameraType === CameraType.back
                ? this.setState({ cameraType: CameraType.front })
                : this.setState({ cameraType: CameraType.back });
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.take_photo_button}
            onPress={this.takePicture}
          />
        </View>
      </View>
    );
  }
}

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  // camera_page_container: {
  //   flex: 1,
  // },
  camera_container: {
    flex: 1,
  },
  camera: {
    width: '100%',
    height: '90%',
  },
  post_icon: {
    marginLeft: 3,
    marginRight: 3,
  },
  take_photo_button: {
    borderRadius: 50,
    height: 85,
    width: 85,
    backgroundColor: '#FFCC15',
    borderColor: '#000',
    borderWidth: 1,
  },
  camera_bottom_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
