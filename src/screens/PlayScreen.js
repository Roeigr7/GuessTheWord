import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import gameBg from '../images/gameBg.png';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import WordGame from '../components/WordGame';

import { globalStyles } from '../styles/globalStyles';

const PlayScreen = () => {
  const life = useSelector((state) => state.game.life);
  const level = useSelector((state) => state.game.level);

  return (
    <ImageBackground source={gameBg} style={styles.bgImage}>
      <View style={globalStyles.upContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTxt}>Life: {life}</Text>
          <Text style={styles.detailsTxt}>Level: {level}</Text>
        </View>
        <Text style={styles.title}>LEVEL {level}</Text>
      </View>

      <WordGame />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.01)',
  },
  detailsTxt: {
    color: 'white',
    fontSize: 20,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },

  title: {
    textAlign: 'center',
    fontSize: 36,
    color: '#3088DD',
    marginTop: 100,
    fontWeight: 'bold',
  },
  wordContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 36,
    width: '12%',
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5,
    backgroundColor: '#fbd730',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },

  submitContainer: {
    flex: 1,
  },
  btnStyle: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
    marginTop: 40,
  },
  btnTitle: {
    fontSize: 32,
  },
});
export default PlayScreen;
