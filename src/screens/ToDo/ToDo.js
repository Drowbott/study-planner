import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "./Task";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { text: "Review Math", completed: false },
    { text: "Review Math", completed: false },
    { text: "Review Math", completed: false },
    { text: "Review Math", completed: false },
  ]);

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onToggle={() => handleTaskToggle(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71C9CE",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 10,
    borderRadius: 2,
    backgroundColor: "#e2e755",
  },
});

export default TodoList;
