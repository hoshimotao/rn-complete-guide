import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };

  const addGoalHandler =() => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
    console.log(enteredGoal)

  };


  return (


    <View style={styles.screen}>
      <View style={styles.inputContainer}> 
       <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} 
       value={enteredGoal}/>

       {/* the add button */}
       <Button  title="ADD" onPress={addGoalHandler}/>
      </View>  

      <ScrollView>
        {courseGoals.map((goal) => <View key={goal}><Text style={styles.listItem}> {goal} </Text></View>)}
      </ScrollView>

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
