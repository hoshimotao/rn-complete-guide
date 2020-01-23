import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Text} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState ('');
  const goalInputHandler = enteredText => {
    setEnteredGoal (enteredText);
  };

  const onGoalHandler = () => {
    props.onAddGoal (enteredGoal);
    setEnteredGoal ('');
  };

  const deleteGoalHandler = () => {
    props.onCancel (enteredGoal);
    setEnteredGoal ('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.inputContainer}>
        {/* <Text> Goals </Text> */}
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>

          {/* the add button */}
          <View style={styles.buttonProps}>
            <Button title="Add" onPress={onGoalHandler} />
          </View>

          {/* the delete button */}
          <View style={styles.buttonProps}>
            <Button title="Cancel" color="red" onPress={deleteGoalHandler} />
          </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create ({
  inputContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220
  },
  buttonProps: {
    width: 100,
  },
});

export default GoalInput;
