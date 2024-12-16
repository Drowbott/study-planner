import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExamButtons = ({ subject, onPress }) => {
  // Sample exam data
  const exams = [
    { name: 'Quiz 1', date: 'Jan 17, 2025' },
    { name: 'Quiz 2', date: 'Feb 7, 2025' },
    { name: 'Mid-Term', date: 'Feb 28, 2025' },
    { name: 'Quiz 3', date: 'March 21, 2025' },
    { name: 'Quiz 4', date: 'April 11, 2025' },
    { name: 'Final Exam', date: 'April 25, 2025' },
  ];

  return (
    <View style={styles.container}>
      {exams.map((exam, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPress(subject, exam.name)} 
        >
          <Text style={styles.buttonText}>{exam.name}</Text>
          <Text style={styles.examDate}>{exam.date}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  examDate: {
    fontSize: 14,
    color: '#eee',
  },
});

export default ExamButtons;

