import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {textColor} from '../assets/colors';
import Grass from '../assets/Icons/grass.svg';
import Dark from '../assets/Icons/dark.svg';
import Fire from '../assets/Icons/fire.svg';
import Dragon from '../assets/Icons/dragon.svg';

const Icon = ({children, onPress, name, style, width, height, ...props}) => {
  let RenderIcon;
  switch (name) {
    case 'grass':
      RenderIcon = Grass;
      break;
    case 'fire':
      RenderIcon = Fire;
      break;
    case 'dragon':
      RenderIcon = Dragon;
      break;
    default:
      RenderIcon = Dark;
  }
  return (
    <TouchableWithoutFeedback
      style={{...styles.icon, ...style}}
      onPress={onPress}>
      {name ? (
        <RenderIcon height={height} width={width} color={textColor.white} />
      ) : (
        children
      )}
    </TouchableWithoutFeedback>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
});
