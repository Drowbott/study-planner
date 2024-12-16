import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screens/Menu/Menu';
import ScheduleScreen from '../screens/Schedule/ScheduleScreen';
import ToDo from '../screens/ToDo/ToDo';
import Notes from '../screens/Notes/Notes';
import ExamTracker from '../screens/ExamTracker/ExamTracker';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="ToDo" component={ToDo} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="ExamTracker" component={ExamTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
