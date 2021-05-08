import {StyleSheet} from 'react-native';
import {textColor} from '../assets/colors';

const fontFamily = StyleSheet.create({
  bold: {
    fontFamily: 'SF-Pro-Display-Bold',
  },
});

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    color: textColor.black,
    ...fontFamily.bold,
  },
  subHeading: {
    fontSize: 16,
    color: textColor.grey,
  },
  title: {
    fontSize: 26,
    color: textColor.white,
    ...fontFamily.bold,
  },
  number: {
    fontSize: 12,
    color: textColor.number,
    ...fontFamily.bold,
  },
});
