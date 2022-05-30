/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, StyleSheet, Button, Modal,
} from 'react-native';

class ModalTab extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: true,
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
                Welcome Syed! Today&apos;s quest is going on a sunrike!
              </Text>
              <Button color="#000000"
                title="ok"
                onPress={() => this.setState({ modalVisible: false })}
              />
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
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 80,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  modalText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 150,
    paddingBottom: 50,
  },

});

export default ModalTab;
