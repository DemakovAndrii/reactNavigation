import React from 'react';
import {Button, Text, View} from 'react-native';
import test from '../../public/data//test.json';
import test2 from '../../public/data//test2.json';

const text = test[0];

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
            otherParam: 'anything you want here',
            rrr: text,
          })
        }
      />
      {test2.map(({name, index}) => (
        <Button
          title={name}
          key={index}
          onPress={() =>
            navigation.navigate('Setting', {
              param: name,
            })
          }
        />
      ))}
    </View>
  );
};

export default Home;
