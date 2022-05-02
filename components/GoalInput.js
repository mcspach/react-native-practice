import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler() {
        if (enteredGoalText!='') {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        }
      }

    return (
      <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
          <Image source={require('../assets/favicon.png')} style={styles.image}/>
          <TextInput style={styles.goalInput} placeholder='Add a goal' onChangeText={goalInputHandler}/>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrap}>
              <Button title='+ Goal' onPress={addGoalHandler} color="#5e0acc"/>
            </View>
            <View style={styles.buttonWrap}>
              <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>
        </View> 
      </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        alignItems: 'center',
        backgroundColor: '#1e085a'
      },
    goalInput: {
        width: '60%',
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#5e0acc',
        borderRadius: 4,
        padding: 5,
      },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    buttonWrap: {
      margin: 10,
      width: '25%'
    },
    image: {
      marginBottom: 10
    }
});