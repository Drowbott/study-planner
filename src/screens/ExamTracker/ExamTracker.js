import React from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import ExamButtons from '../../components/ExamButtons';

const ExamTracker = () => {

  const handlePress = (subject, exam) => {
    console.log(`Pressed: ${subject} - ${exam}`);
    Alert.alert(`${subject} - ${exam}`, 'Details not available');

    const examDetails = {
      'Quiz 1': 'Chapter 1-3',
      'Quiz 2': 'Chapter 4-6',
      'Mid-Term': 'Chapter 1-6: Comprehensive Review',
      'Quiz 3': 'Chapter 7-9',
      'Quiz 4': 'Chapter 10-12',
      'Final Exam': 'Full Syllabus: Chapter 1-12',
    };

    Alert.alert(
      `${subject} - ${exam}`, 
      `${examDetails[exam] || 'Details not available'}` 
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Exam Tracker</Text>
      </View>

      {/* Math Section */}
      <View style={styles.card}>
        <Text style={[styles.subjectTitle, { color: 'red' }]}>Math</Text>
        <ExamButtons subject="Math" onPress={handlePress} />
      </View>

      {/* Science Section */}
      <View style={styles.card}>
        <Text style={[styles.subjectTitle, { color: 'blue' }]}>Science</Text>
        <ExamButtons subject="Science" onPress={handlePress} />
      </View>

      {/* English Section */}
      <View style={styles.card}>
        <Text style={[styles.subjectTitle, { color: 'purple' }]}>English</Text>
        <ExamButtons subject="English" onPress={handlePress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67C8D3', 
    padding: 10,
  },
  header: {
    backgroundColor: '#E9E448', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    backgroundColor: '#E9E448',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ExamTracker;


