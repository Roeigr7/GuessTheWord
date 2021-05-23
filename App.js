import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/RootNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './src/screens/IntroScreen';
import PlayScreen from './src/screens/PlayScreen';
import LeaderBoardScreen from './src/screens/LeaderBoardScreen';
import store from './src/redux/store';
import EndGameScreen from './src/screens/EndGameScreen';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator initialRouteName='Intro'>
          <Stack.Screen name='Intro' component={IntroScreen} />
          <Stack.Screen name='PlayScreen' component={PlayScreen} />
          <Stack.Screen name='EndGame' component={EndGameScreen} />
          <Stack.Screen name='LeaderBoard' component={LeaderBoardScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
export default App;
