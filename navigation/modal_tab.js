/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, StyleSheet, Pressable, Modal,
} from 'react-native';
import userGet from '../services/sidequestUser-api';
// import questGet from '../services/pullQuest-api';

class ModalTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      id: '62955568344a64f0f6811392',
      // questID: '6293e683ea1205c7349c484f',
    };
  }

  componentDidMount() {
    this.fetchUser();
    // this.fetchQuestData();
  }

  // ------------ put fetchData here! -------------//
  fetchUser() {
    userGet(this.state.id)
      .then((responseData) => {
        this.setState({
          user: responseData,
        });
        // console.log('main_tab_bar');
      }).catch((error) => {
        console.log(error);
      });
  }

  // ------------ put fetchData here! -------------//
  // fetchQuestData() {
  //   questGet(this.state.questID)
  //     .then((responseData) => {
  //       // console.log('main-tab response data----------------');
  //       console.log(`${responseData}quest`);
  //       this.setState({
  //         quest: responseData,
  //       });
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalScreen} />
        <Modal visible={this.state.modalVisible} transparent>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Welcome
                {this.state.user}
                ! Today&apos;s quest is to go to the river
                {/* {this.state.quest.questID} */}
              </Text>
              <Pressable style={styles.button} onPress={() => this.state.setVisible(false)}>
                <Text style={styles.buttonText}>
                  OK
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  normalScreen: {
    fontSize: 80,
  },
  modal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    marginTop: 200,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 200,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  modalText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFCC15',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },

});

export default ModalTab;
