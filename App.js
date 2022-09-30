import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'}/>
        </View>

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView   
        behavior={Platform.OS == "ios" ? "padding" : "height" } // if ios: gets padding, else height
        style={styles.writeTaskWrapper}
      >
        <TextInput syle={styles.input} placeholder={'Write a task'} />

        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View> // END OF MAIN-VIEW CONTAINER
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontsize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,    // Space between 'Today's Tasks' and tasks.
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    verticalPassing: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    width: 250,
  },
  addWrapper: {},
  addText: {},
});
