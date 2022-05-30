import React, { Component } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  StyleSheet, View, Text,
} from 'react-native';
import { SearchBar } from '@rneui/themed';

class SearchTab extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

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
        <View>
          <Text style={styles.subText}>
            Suggested
          </Text>
          <Text style={styles.defaultText}>
            No Current Suggestions
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirections: 'column',
    background: '#fff',
  },
  title: {
    justifyContent: 'left',
    alignItems: 'left',
    paddingRight: 250,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 20,
    alignItems: 'left',
    paddingLeft: 20,
  },
  searchBar: {
    platform: 'default',
    paddingLeft: 0,
    background: '#fff',
  },
  findFriends: {
    paddingBottom: 20,
  },
  defaultText: {
    alignSelf: 'center',
    paddingTop: '50%',
  },

});

export default SearchTab;
