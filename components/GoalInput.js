import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';

export default function GoalInput({ goalHandler, isModalOpen }) {
  const [goal, setGoal] = useState('');

  const addGoalHandler = () => {
    goalHandler(goal);
    setGoal('');
  };

  return (
    <Modal visible={isModalOpen} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setGoal(value)}
          style={styles.textInput}
          placeholder='write your goal'
          value={goal}
        />
        <Button disabled={!goal} onPress={addGoalHandler} title='add goal' />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
