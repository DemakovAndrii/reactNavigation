import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const Gashi = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <LinearGradient
          colors={['#48A1F5', '#EBE214']}
          style={{paddingLeft: 5}}>
          <MaskedView
            style={{flex: 1, flexDirection: 'row', height: '100%'}}
            maskElement={
              <View
                style={{
                  backgroundColor: 'transparent',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  AVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAAVAVAVAVAVAVAVAVAVAA
                </Text>
              </View>
            }>
            <Image
              style={{height: 804, width: 400}}
              source={{
                uri: 'https://static.wikia.nocookie.net/siivagunner/images/4/40/Gachimuchi.jpg/revision/latest/top-crop/width/360/height/450?cb=20181204024544',
              }}
            />
          </MaskedView>
        </LinearGradient>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

export default Gashi;
