/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  useWindowDimensions, View, Image, StyleSheet, Text,
} from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import StatScreen from '../components/stat_screen';
import RewardScreen, { renderTabBar } from '../components/inventory';

const renderScene = SceneMap({
  first: StatScreen,
  second: RewardScreen,
});

const user = {
  profilePic: 'https://i.ibb.co/2FhFgSB/zhoucaini.png',
};

function ProfileTab(props) {
  // console.log('profile tab props--------------');
  // console.log(props);

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Stats' },
    { key: 'second', title: 'Inventory' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.icons}
            source={{ uri: user.profilePic }}
          />
        </View>
        <Text style={styles.userName}>
          {props.route.params.name}
        </Text>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    backgroundColor: '#FFCC15',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
  },
  avatarContainer: {
    height: 150,
    width: 150,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
    margin: 5,
    alignSelf: 'center',
  },
  icons: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default ProfileTab;
