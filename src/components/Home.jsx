import React from 'react';
import {Button, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import test from '../../public/data//test.json';

const text = test[1];
console.log(text);

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: '900', fontSize: 50}}>
        its HOME
      </Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {
            itemId: 1,
            rrr: text,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};

export default Home;
