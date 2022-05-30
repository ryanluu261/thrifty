// Camera Page
// Handles taking the pictures & selecting pictures from the gallery
// Can also flip camera used

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View,
  TouchableOpacity, Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      cameraType: CameraType.back,
      isFocused: this.props.isFocused,
    };

    this.camera = React.createRef();
    this.takePicture = this.takePicture.bind(this);
    this.getGalleryPicture = this.getGalleryPicture.bind(this);
    this.handleCameraFlip = this.handleCameraFlip.bind(this);
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.2 };
      const photo = await this.camera.current.takePictureAsync(options);
      this.setState({
        image: photo,
      });

      // this.camera.current.pausePreview();
      this.props.navigation.navigate(
        'ImagePreview',
        {
          image: photo,
        },
      );
    }
  }

  // reference https://docs.expo.dev/versions/latest/sdk/imagepicker/
  async getGalleryPicture() {
    const photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // this.camera.current.pausePreview();
    if (!photo.cancelled) {
      this.setState({ image: photo });
      this.props.navigation.navigate(
        'ImagePreview',
        {
          image: photo,
        },
      );
    }
  }

  handleCameraFlip() {
    this.state.cameraType === CameraType.back
      ? this.setState({ cameraType: CameraType.front })
      : this.setState({ cameraType: CameraType.back });
  }

  render() {
    const { cameraType } = this.state;
    const { isFocused } = this.props;

    return (
      <View styles={styles.camera_page_container}>
        <View styles={styles.camera_container}>
          {
            isFocused
            && (
            <Camera
              ref={this.camera}
              type={cameraType}
              style={styles.camera}
            />
            )
          }
        </View>
        <View style={styles.camera_bottom_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCameraFlip}
          >
            <Ionicons name="refresh" size={85} style={styles.post_icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.take_photo_button}
            onPress={this.takePicture}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.getGalleryPicture}
          >
            <Ionicons name="photo" size={85} style={styles.post_icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  camera_page_container: {
    height,
    flexDirection: 'column',
  },
  camera_container: {
    flex: 1,
  },
  camera: {
    width,
    height: 0.6 * height,
  },
  post_icon: {
    marginLeft: 3,
    marginRight: 3,
    color: '#FFCC15',
  },
  take_photo_button: {
    borderRadius: 50,
    height: 85,
    width: 85,
    backgroundColor: '#FFCC15',
    borderColor: '#000',
    borderWidth: 3,
  },
  camera_bottom_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    height: 0.25 * height,
    marginTop: 0.05 * height,
    marginBottom: 0.1 * height,
  },
});

const CameraPageComponent = function CameraPageFunction(props) {
  const isFocused = useIsFocused();

  return <CameraPage {...props} isFocused={isFocused} />;
};

export default CameraPageComponent;
