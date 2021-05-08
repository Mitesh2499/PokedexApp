import React from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import {textColor} from './src/assets/colors';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={textColor.white} />
      <View style={{flex: 1, backgroundColor: textColor.white}}>
        <HomeScreen />
      </View>
    </>
  );
};

export default App;
