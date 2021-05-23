import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import * as RootNavigation from '../RootNavigation';
const SaveForm = ({ setForm }) => {
  const [details, setDetails] = useState({ name: '', phone: '' });
  const [error, setError] = useState({ name: false, phone: false });
  const level = useSelector((state) => state.game.level);

  const dispatch = useDispatch();
  const handleSave = () => {
    setError((e) => ({ phone: false, name: false }));
    if (details.name.length > 1 && details.phone.length > 0) {
      dispatch({ type: 'ADD_SCORE', payload: { details, level } });
      RootNavigation.navigate('LeaderBoard');
    } else if (details.name.length < 2) {
      setError((e) => ({ ...e, name: 'need at least 2 characters' }));
    } else if (details.phone.length < 1) {
      setError((e) => ({ ...e, phone: 'enter valid phone' }));
    }
  };
  return (
    <View style={styles.container}>
      <Input
        errorMessage={error.name ? error.name : ''}
        onChangeText={(value) => setDetails({ ...details, name: value })}
        placeholder='Name'
      />
      <Input
        errorMessage={error.phone ? error.phone : ''}
        keyboardType='numeric'
        onChangeText={(value) => setDetails({ ...details, phone: value })}
        placeholder='Phone'
      />
      <Button
        buttonStyle={styles.btn}
        title='Save Score'
        onPress={handleSave}
      />
      <Button
        buttonStyle={styles.btn}
        title='Go back'
        onPress={() => setForm(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
  },
  btn: {
    margin: 10,
  },
});

export default SaveForm;
