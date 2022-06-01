import React, { Component } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  StyleSheet, View, Text, Image,
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import Friend from '../components/friend';
import userGet from '../services/sidequestUser-api';
import getAllUsers from '../services/sidequestSearchUsers';
import postsGet from '../services/sidequestPost-api';

const friend_info = {
  userName: '',
  mutualFriends: '7 Mutual Friends',
  ballUsers: [],
  foundUser: false,
}

class SearchTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      id: '',
      user: [],
      allUsers: [],
    }
  }

  fetchData() {
    getAllUsers()
      .then((responseData) => {
        friend_info.ballUsers = responseData;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  findUsersWithName() {
    let matchingUsers = friend_info.ballUsers.filter(user => user.userName == friend_info.userName);
    if (matchingUsers.length > 0){
      console.log("----------yay we found a match ------------------");
      console.log(matchingUsers);
    }
    return matchingUsers;
  }

  updateSearch = (search) => {
    this.setState({ search });
    friend_info.userName = search;
    console.log(friend_info.userName);
    this.fetchData();
    let matchedUser = this.findUsersWithName();
    if (matchedUser.length > 0){
      friend_info.foundUser = true,
      friend_info.userName = matchedUser[0].userName;
    } else {
      friend_info.foundUser = false
    };
  };

  renderSuggestion() {
    if (friend_info.foundUser == false){
      return(
        <View>
          <Text style={styles.noSuggestions}>
            No Current Suggestions
          </Text>
        </View>
      );
    } else {
      return(
        <View>
          <Friend style={styles.friend} friendInfo={friend_info}/>
        </View>
      );
    }
  }

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Friends
          </Text>
        </View>
        <View style={styles.findFriends}>
          <Text style={styles.subText}>
            Find Friends
          </Text>
          <SearchBar style={styles.searchBar}
            placeholder="Type Username Here"
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
            round
            containerStyle={{
              backgroundColor: '#ff',
              borderWidth: 0,
              borderRadius: 0,
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
            }}
            inputContainerStyle={{ backgroundColor: 'white' }}
          />
        </View>
        <Text style={styles.subText}>
            Suggested
        </Text>
        {this.renderSuggestion()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'left',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 20,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  searchBar: {
    // platform: 'default',
    paddingLeft: 0,
    // background: '#fff',
  },
  findFriends: {
    paddingBottom: 20,
  },
  noSuggestions: {
    alignSelf: 'center',
    paddingTop: '50%',
  },
});

export default SearchTab;
