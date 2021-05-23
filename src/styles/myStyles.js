import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
///TITLE
export const MyTitle = ({ text }) => {
  return (
    <Animatable.Text
      animation='pulse'
      easing='ease-out'
      iterationCount='infinite'
    >
      <Text style={styles.title}>{text}</Text>
    </Animatable.Text>
  );
};

///BUTTON
export const MyButton = ({ title, onPress }) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      titleStyle={styles.btnTitle}
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
    />
  );
};

const styles = StyleSheet.create({
  btnTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnStyle: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 38,
    color: '#fbd662',
    fontWeight: 'bold',
    elevation: 3,
  },
  btnContainer: {
    marginVertical: 5,
    elevation: 1,
    borderRadius: 20,
    borderColor: 'white',
  },
});
