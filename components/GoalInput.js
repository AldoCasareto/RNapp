import { View, Text, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import React, { useState } from 'react';

export default function GoalInput({ goalHandler, isModalOpen, handleModalVisibility }) {
  const [goal, setGoal] = useState('');

  const addGoalHandler = () => {
    goalHandler(goal);
    setGoal('');
    handleModalVisibility(false);
  };

  return (
    <Modal visible={isModalOpen} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          onChangeText={(value) => setGoal(value)}
          style={styles.textInput}
          placeholder='write your goal'
          value={goal}
        />
        <View style={styles.modalButtons}>
          <View style={styles.button}>
            <Button color='#5e0acc' disabled={!goal} onPress={addGoalHandler} title='Add Goal' />
          </View>
          <View style={styles.button}>
            <Button color='#f31282' onPress={handleModalVisibility} title='Cancel' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    width: '100%',
    padding: 8,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
