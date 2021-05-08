import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {backgroundColors} from '../assets/colors';
import commonStyles from '../styles/commonStyles';
import Tag from './Tag';
import Pokeball_card from '../assets/Images/Pokeball_card.png';
import Dots_card from '../assets/Images/Dots_card.png';
import {width} from '../assets/constants';

const Card = ({item}) => {
  console.warn({item});
  let type = 'grass';
  if (item > 3) {
    type = 'fire';
  }

  return (
    <View style={{...styles.card, backgroundColor: backgroundColors[type]}}>
      <View style={{padding: 15, paddingRight: 0, width: width / 1.8}}>
        <View style={{position: 'absolute', right: 0, top: 5}}>
          <Image source={Dots_card} style={{width: 100, height: 40}} />
        </View>
        <Text style={commonStyles.number}>#0001</Text>
        <Text style={commonStyles.title}>Bulbasaur</Text>
        <View style={commonStyles.row}>
          <Tag type={type} />
          <Tag type="poison" />
        </View>
      </View>

      <ImageBackground
        resizeMode="contain"
        source={Pokeball_card}
        style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${item}.png`,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: -10,
    marginLeft: -10,
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
