import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Friend extends Component {
  constructor(props) {
    super(props);

    const { friendInfo } = this.props;
    this.friendInfo = friendInfo;
  }

  render() {
    return (
      <View style={styles.friend_container}>
        <View style={styles.friend_info}>
          <Text style={styles.friendName}>
            {this.friendInfo.userName}
          </Text>
          <Text style={styles.mutuals}>
            {this.friendInfo.mutualFriends}
          </Text>
        </View>
        <Icon name="plus" size={30} color="#000000" style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friend_container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFDD66',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: '15',
  },
  friend_info: {
    alignSelf: 'space-between',
  },
  friendName: {
    fontSize: 17,
    paddingBottom: 5,
  },
  mutuals: {
    fontSize: 12,
    color: '#0053CF',
  },
  icon: {
    alignSelf: 'center',
  },

});

export default Friend;
