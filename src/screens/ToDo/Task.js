import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = ({ task, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText, task.completed && styles.completed]}>
          {task.text}
        </Text>
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2D7D5",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#e2e755",
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  checkmark: {
    fontSize: 20,
    color: "green",
  },
});

export default Task;
