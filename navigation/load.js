import React, { Component } from 'react';
import {
  StyleSheet, View, ActivityIndicator,
} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFCC15" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalScreen: {
    alignItems: 'center',
    fontSize: 30,
    justifyContent: 'center',
  },
});

export default Loading;
