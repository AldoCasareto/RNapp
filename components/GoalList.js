import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const GoalList = ({ goals, handleDelete }) => {
  return (
    <View style={styles.goals}>
      <FlatList
        data={goals}
        // keyExtractor={(item) => item.id}
        renderItem={({ item: { goal, key } }) => (
          <View style={styles.goalText}>
            <Pressable
              style={({ pressed }) => pressed && styles.pressedItem}
              android_ripple={{ color: '#dddddd' }}
              onPress={() => handleDelete(key)}
            >
              <Text style={{ color: 'white', padding: 8 }}>{goal}</Text>
            </Pressable>
          </View>
        )}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default GoalList;

const styles = StyleSheet.create({
  goals: {
    flex: 4,
  },
  goalText: {
    margin: 8,
    fontSize: 12,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
