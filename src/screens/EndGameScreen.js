import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SaveForm from '../components/SaveForm';
import leaderBg from '../images/leaderBg.png';
import { ImageBackground } from 'react-native';
import { MyButton, MyTitle } from '../styles/myStyles';
import { globalStyles } from '../styles/globalStyles';
const EndGameScreen = ({ route, navigation }) => {
  const level = useSelector((state) => state.game.level);
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'NEW_GAME' });
  }, []);
  const handleTryAgain = () => {
    navigation.navigate('PlayScreen');
  };

  return (
    <ImageBackground source={leaderBg} style={globalStyles.bgImage}>
      <View style={globalStyles.upContainer}>
        <MyTitle text={route.params.title} />
      </View>
      <Text style={styles.levelText}>Your Score: Level {level}</Text>
      <View style={globalStyles.downContainer}>
        {!form && (
          <MyButton title='Save My Score' onPress={() => setForm(true)} />
        )}
        {form ? (
          <SaveForm setForm={setForm} />
        ) : (
          <View>
            <MyButton title='Try Again' onPress={handleTryAgain} />

            <MyButton
              title='Leader Board'
              onPress={() => navigation.navigate('LeaderBoard')}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  levelText: {
    fontSize: 18,
    color: '#fbd662',
    backgroundColor: '#1a539d',
    padding: 10,
    elevation: 2,
    borderRadius: 20,
  },
});

export default EndGameScreen;
