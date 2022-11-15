import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Gashi from './src/components/Gashi';
import Home from './src/components/Home';
import About from './src/components/About';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Gashi" component={Gashi} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
