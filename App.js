import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (


    <View style={styles.screen}>
      <View style={styles.inputContainer}> 
       <TextInput placeholder="Course Goal" style={styles.input}/>
       <Button  title="ADD"/>
      </View>  
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
    fontSize: 16
  }
});
