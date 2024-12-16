import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const handleAddEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents(prevEvents => ({
        ...prevEvents,
        [selectedDate]: [...(prevEvents[selectedDate] || []), newEvent],
      }));
      setNewEvent('');
    }
    setModalVisible(false);
  };

  const renderCalendar = () => {
    const markedDates = {};
    if (selectedDate) {
      markedDates[selectedDate] = { selected: true, selectedColor: '#4A6572' };
    }

    for (const date in events) {
      markedDates[date] = { marked: true, dotColor: 'red' };
    }

    return (
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          arrowColor: '#e2e756',
          textSectionTitleColor: '#e2e756',
          todayTextColor: '#e2e756',
          selectedDayBackgroundColor: '#4A6572',
        }}
      />
    );
  };

  const renderEvents = () => {
    if (selectedDate && events[selectedDate]) {
      return events[selectedDate].map((event, index) => (
        <Text key={index} style={styles.eventText}>
          - {event}
        </Text>
      ));
    }
    return <Text style={styles.eventText}>No events scheduled for this day.</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Schedule</Text>
      {renderCalendar()}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Event for {selectedDate}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter event details"
              value={newEvent}
              onChangeText={setNewEvent}
            />
            <Button title="Add Event" onPress={handleAddEvent} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>Events for {selectedDate}:</Text>
        {renderEvents()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71C9CE',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E2E756',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  eventsContainer: {
    marginTop: 20,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E2E756',
  },
  eventText: {
    fontSize: 16,
    color: '#4A6572',
  },
});

export default ScheduleScreen;