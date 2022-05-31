import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FriendPosts from '../components/friend_posts';
import CommunityPosts from '../components/community_posts';
// import modal
import ModalTab from './modal_tab';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    style={{ backgroundColor: 'transparent', color: 'black' }}
    labelStyle={{
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      // user: props.user,
    }}

  />
);

const renderScene = SceneMap({
  first: CommunityPosts,
  second: FriendPosts,
});

function HomeTab() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Community' },
    { key: 'second', title: 'Friends' },
  ]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Sidequest</Text>  */}
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      {/* <ModalTab /> */}
    </View>

  );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // height: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
export default HomeTab;
