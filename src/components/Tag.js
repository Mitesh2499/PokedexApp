import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, textColor} from '../assets/colors';
import commonStyles from '../styles/commonStyles';
import Icon from './Icon';
const Tag = ({type}) => {
  return (
    <View style={{...styles.tag, backgroundColor: colors[type]}}>
      <Icon style={{paddingHorizontal: 0}} name={type} width={10} height={10} />
      <Text
        style={{
          color: textColor.white,
          marginLeft: 2,
          textTransform: 'capitalize',
        }}>
        {type}
      </Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    borderRadius: 3,
    marginRight: 5,
    padding: 5,
    marginTop: 2,
    ...commonStyles.row,
  },
});
