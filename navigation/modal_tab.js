/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, StyleSheet, Pressable, Modal,
} from 'react-native';

class ModalTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      setVisible: props.setVisible,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalScreen} />
        <Modal visible={this.state.modalVisible} transparent>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Welcome Zhoucai
                ! Today&apos;s quest is to Slap Syed
                {/* {this.state.dailyQuest} */}
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
