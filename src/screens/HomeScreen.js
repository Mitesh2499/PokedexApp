import React from 'react';
import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
import {height} from '../assets/constants';
import Pokeball_header from '../assets/Images/Pokeball_header.png';
import commonStyles from '../styles/commonStyles';
import Generation from '../assets/Icons/generation.svg';
import Sort from '../assets/Icons/sort.svg';
import Filter from '../assets/Icons/filter.svg';
import Search from '../assets/Icons/search.svg';
import {customColor, textColor} from '../assets/colors';
import Icon from '../components/Icon';
import Input from '../components/Input';
import Card from '../components/Card';
const HomeScreen = () => {
  const pokemons = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <ImageBackground
        resizeMode="contain"
        style={{width: '100%', height: height / 4}}
        source={Pokeball_header}>
        <View style={commonStyles.container}>
          <View
            style={{
              ...commonStyles.row,
              justifyContent: 'flex-end',
              marginVertical: 20,
            }}>
            <Icon>
              <Generation color={textColor.black} />
            </Icon>
            <Icon>
              <Sort color={textColor.black} />
            </Icon>
            <Icon>
              <Filter color={textColor.black} />
            </Icon>
          </View>

          <Text style={commonStyles.heading}>Pokedex</Text>
          <Text style={commonStyles.subHeading}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>

          <View style={styles.searchContainer}>
            <Icon>
              <Search color={textColor.grey} />
            </Icon>
            <Input
              placeholderTextColor={textColor.grey}
              placeholder="What Pokémon are you looking for?"
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{...commonStyles.container, paddingBottom: 50, marginTop: 10}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={pokemons}
          renderItem={({item}) => <Card item={item} />}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    ...commonStyles.row,
    marginVertical: 15,
    backgroundColor: customColor.input,
    borderRadius: 10,
    paddingLeft: 15,
  },
});
