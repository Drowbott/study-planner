import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt, faCheckSquare, faStickyNote, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Study Planner</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule')}>
        <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
        <Text style={styles.buttonText}>Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ToDo')}>
        <FontAwesomeIcon icon={faCheckSquare} style={styles.icon} />
        <Text style={styles.buttonText}>To Do List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notes')}>
        <FontAwesomeIcon icon={faStickyNote} style={styles.icon} />
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExamTracker')}>
        <FontAwesomeIcon icon={faCalendarCheck} style={styles.icon} />
        <Text style={styles.buttonText}>Exam Tracker</Text>
      </TouchableOpacity>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 10,
    borderRadius: 2,
    backgroundColor: "#e2e755",
  },
  button: {
    backgroundColor: "#e2e755",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default Menu;