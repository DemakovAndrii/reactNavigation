import React from 'react';
import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gashi from './src/components/Gashi';
import Home from './src/components/Home';
import About from './src/components/About';
import Setting from './src/components/Setting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: 'TEXt'}} />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
          }}
        />

        <Stack.Screen
          name="Gashi"
          component={Gashi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'My Setting',
            headerStyle: {
              backgroundColor: '#4DD6D4',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
