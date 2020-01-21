import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState ('');
  const goalInputHandler = enteredText => {
    setEnteredGoal (enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

{/* the add button */}
      <Button title="ADD" onPress={props.onAddGoal.bind (this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create ({
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
  },
});

export default GoalInput;
