
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
 
function todolist({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task) => (
          <View style={styles.task}>
            <Text>{task}</Text>
          </View>
      ))}
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
 
});
 
export default todolist;