import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "./todolist";
import ToDoForm from "./todoform";
 
function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
 
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm/>
    </SafeAreaView>
  );
}
 
export default App;
