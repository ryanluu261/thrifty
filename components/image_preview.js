/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableHighlight, Alert,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Camera, CameraType } from 'expo-camera';

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      hasPermission: false,
      cameraStarted: false,
      cameraType: CameraType.back,
    };
  }
}
export default ImagePreview;
