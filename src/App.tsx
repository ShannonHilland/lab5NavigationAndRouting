import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen  from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  function getScreenOptions() : any {
    const options = {
      headerTintColor: '#727272',
      headerStyle: { backgroundColor: '#FFC484' },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 24
      }
    }
    return options;
  }
    
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={getScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
