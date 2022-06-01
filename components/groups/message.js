import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

function Message(props) {
  return (
    <View
      style={props.type === 'self' ? styles.ownMessage : styles.friendsMessage}
    >
      <Text
        style={[
          styles.userName,
          props.type === 'self' ? { color: '#FFCC15' } : { color: '#67646d' },
        ]}
      >
        Name
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sed
        hendrerit ac mollis sollicitudin viverra proin. Phasellus tristique
        nulla eu leo aliquet maecenas sapien. Fermentum curabitur amet.
      </Text>
      <Text style={styles.time}>13:15pm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ownMessage: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#f5eed1',
    width: '70%',
    borderRadius: 10,
    marginLeft: 'auto',
    // '&::after': {
    //   content: ' ',
    //   position: 'absolute',
    //   top: '100%',
    //   left: 0,
    //   marginLeft: -5,
    //   borderWidth: 5,
    // },
  },
  friendsMessage: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#d3d2e0',
    borderRadius: 10,
    width: '70%',
  },
  userName: {
    color: '#FFCC15',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: '#707882',
  },
  time: {
    fontSize: 10,
    color: '#a9a1b8',
    marginLeft: 'auto',
  },
});

export default Message;
