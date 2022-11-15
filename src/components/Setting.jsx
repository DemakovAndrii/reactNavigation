import React from 'react';
import {View, Text} from 'react-native';

const Setting = ({route}) => {
  const {param} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black', fontWeight: '900', fontSize: 50}}>
        Setting
      </Text>

      <Text style={{color: 'black', fontSize: 18}}>test: {param}</Text>
    </View>
  );
};
export default Setting;
