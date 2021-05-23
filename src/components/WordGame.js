import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import * as RootNavigation from '../RootNavigation';
import { useDispatch, useSelector } from 'react-redux';

import { MyButton } from '../styles/myStyles';

import { globalStyles } from '../styles/globalStyles';
import wordsArr from '../wordsArr';
const WordGame = () => {
  const life = useSelector((state) => state.game.life);
  const level = useSelector((state) => state.game.level);
  const dispatch = useDispatch();

  const [word, setWord] = useState([]);
  const [message, setMessage] = useState(false);
  useEffect(() => {
    const currentWord = wordsArr[level - 1]
      .split('')
      .map((e, i) => (i % 2 === 1 ? (e = '') : e));
    setWord(currentWord);
    setMessage(false);
  }, [level]);

  const handleGuess = () => {
    if (wordsArr.length === level)
      return RootNavigation.navigate('EndGame', {
        title: 'YOU WIN !',
      });

    if (word.join('').toLowerCase() === wordsArr[level - 1].toLowerCase()) {
      dispatch({ type: 'LEVEL_UP' });
    } else if (life < 2) {
      dispatch({ type: 'WRONG_GUESS' });
      return RootNavigation.navigate('EndGame', {
        title: 'Game Over',
      });
    } else {
      setMessage(true);
      dispatch({ type: 'WRONG_GUESS' });
    }
  };

  const handleChangeText = (e, i) => {
    const fillWord = [...word];
    if (e === '') {
      fillWord[i] = '';
      setWord(fillWord);
    } else {
      fillWord[i] = e.slice(-1);
      setWord(fillWord);
    }
  };

  return (
    <View style={globalStyles.downContainer}>
      {message && (
        <Text style={styles.wrongText}>
          {life === 3
            ? 'Wrong Guess'
            : life === 2
            ? 'Try Again'
            : 'Last chance !'}
        </Text>
      )}
      <View style={styles.wordContainer}>
        {word.map((letter, idx) => (
          <TextInput
            key={idx}
            value={letter}
            style={styles.letter}
            editable={idx % 2 === 0 ? false : true}
            onChangeText={(e) => handleChangeText(e, idx)}
          />
        ))}
      </View>
      <View style={styles.submitContainer}>
        <MyButton
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTitle}
          onPress={handleGuess}
          title='Check It !'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wordContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 26,
    width: '10%',
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
    marginTop: 50,
    flex: 1,
  },
  wrongText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'red',
  },
});
export default WordGame;
