import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HangoutsScreen from './screens/HangoutsScreen';
import HangoutDetailsScreen from './screens/HangoutDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Hangouts" component={HangoutsScreen} />
        <Stack.Screen name="HangoutDetailsScreen" component={HangoutDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}