/* eslint-disable no-unused-vars */
// import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native';
import Svg, { Polygon, Line, Text as SvgText } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import SpriteSheet from 'rn-sprite-sheet';
import userGet from '../services/sidequestUser-api';

class StatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '62955568344a64f0f6811392',
      loop: true,
      resetAfterFinish: false,
      fps: '16',
      stats: {
        wisdom: 0,
        strength: 0,
        charisma: 0,
        magic: 0,
        health: 0,
        streak: 0,
      },
      user: [],
    };
  }

  render() {
    return (
      <View>
        <ScrollView style={{ height: '100%' }}>
          <View style={styles.container}>
            <Text style={styles.header}>Current pet: Nerdy cat</Text>
            <View style={styles.image}>
              <Image
                resizeMode='contain'
                source={require('../assets/computer-cat-animation.gif')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Cochin',
    margin: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    alignItems: 'flex-end',
    // fontFamily: 'Cochin',
  },
  userName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default StatScreen;
