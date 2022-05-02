import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()},
      ]);
      endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    console.log(id, courseGoals);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.pageContainer}>
        <Button 
        title='Add New Goal' 
        color='#5e0acc' 
        onPress={startAddGoalHandler}
        />
        <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalsList}>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    justifyContent: 'flex-start',
    backgroundColor: '#1e085a'
  },
  goalsList: {
    flex: 5,
    marginTop: 10,
  },
  goalsFlatList: {

  }
});
