import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
      ]);
    };


  return (


    <View style={styles.screen}>
      <View style={styles.inputContainer}> 
       <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} 
       value={enteredGoal}/>

       {/* the add button */}
       <Button  title="ADD" onPress={addGoalHandler}/>
      </View>  

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => (
      <View style={styles.listItem}>
        <Text> {itemData.item.value} </Text>
      </View>
      )}
      />
      </View>
            

    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    marginTop: 20, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding:8,
    fontSize: 16,
    borderRadius: 4
  },
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  }
});
