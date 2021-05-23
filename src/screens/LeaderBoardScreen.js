import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import leaderBg from '../images/leaderBg.png';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { MyTitle } from '../styles/myStyles';

const renderItem = ({ item }) => (
  <ListItem containerStyle={styles.listContainer}>
    <ListItem.Title>{item.name}</ListItem.Title>
    <ListItem.Subtitle>score: {item.score}</ListItem.Subtitle>
    <ListItem.Subtitle style={{ color: 'black' }}>
      {item.phone}
    </ListItem.Subtitle>
  </ListItem>
);

const LeaderBoardScreen = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <ImageBackground source={leaderBg} style={styles.bgImage}>
      <View style={styles.upContainer}>
        <MyTitle text='LeaderBoard' />
      </View>
      <View style={styles.downContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={users.sort((a, b) => b.score - a.score)}
          renderItem={renderItem}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderColor: 'white',
    borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  upContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downContainer: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
  },
});
export default LeaderBoardScreen;
