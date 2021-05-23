import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import introBg from '../images/mainBg.png';
import { globalStyles } from '../styles/globalStyles';
import { MyTitle, MyButton } from '../styles/myStyles';

const IntroScreen = ({ navigation }) => {
  return (
    <ImageBackground source={introBg} style={globalStyles.bgImage}>
      <View style={globalStyles.upContainer}>
        <MyTitle text='Guess The Word' />
      </View>
      <View style={globalStyles.downContainer}>
        <MyButton
          onPress={() => navigation.navigate('PlayScreen')}
          title='Start New Game'
        />
        <MyButton
          onPress={() => navigation.navigate('LeaderBoard')}
          title='Leader Board'
        />
      </View>
    </ImageBackground>
  );
};

export default IntroScreen;
