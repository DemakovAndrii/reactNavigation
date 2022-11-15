import React from 'react';
import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

const About = ({navigation, route}) => {
  const {itemId, otherParam, rrr} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black', fontWeight: '900', fontSize: 50}}>
        Abort
      </Text>
      <Button title="Gashi" onPress={() => navigation.navigate('Gashi')} />
      <Text style={{color: 'black', fontSize: 18}}>
        itemId: {JSON.stringify(itemId)}
      </Text>
      <Text style={{color: 'black', fontSize: 18}}>
        otherParam: {JSON.stringify(otherParam)}
      </Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Text style={{color: 'black', fontSize: 18}}>
        test: {JSON.stringify(rrr)}
      </Text>
    </View>
  );
};

export default About;
