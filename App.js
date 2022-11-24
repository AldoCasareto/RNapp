import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleModalVisibility = () => {
    setisModalOpen(!isModalOpen);
  };

  const goalHandler = (goal) => {
    if (!goal) return;
    setGoals((currentGoals) => [...currentGoals, { goal, key: new Date() }]);
  };

  const handleDelete = (id) => {
    console.log(id);
    const deleteGoal = goals.filter((goal) => goal.key !== id);
    setGoals(deleteGoal);
  };

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button color='purple' title='add goal' onPress={handleModalVisibility} />
        <GoalInput
          goalHandler={goalHandler}
          isModalOpen={isModalOpen}
          handleModalVisibility={handleModalVisibility}
        />
        <GoalList goals={goals} handleDelete={handleDelete} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
