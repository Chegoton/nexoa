import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home-screen';
import EventDetailScreen from '../../screens/event-detail-screen';
import LoginScreen from '../../screens/login-screen';
import HomeUserScreen from '../../screens/home-user-screen';
import KaizenScreen from '../../screens/kaizen-screen';
import RecognitionScreen from '../../screens/recognition-screen';
import SatisfactionSurveyScreen from '../../screens/satisfaction-survey-screen';
import React from 'react';


const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeUser" component={HomeUserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Kaizen" component={KaizenScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Recognition" component={RecognitionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SatisfactionSurvey" component={SatisfactionSurveyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Event" component={EventDetailScreen} />
      </Stack.Navigator>
  );
}