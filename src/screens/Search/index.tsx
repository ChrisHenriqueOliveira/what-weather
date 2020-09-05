// components/Hello.tsx
import React, { useCallback } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { 
  parseISO, 
  format, 
  formatRelative, 
  formatDistance,
} from 'date-fns';

const morning_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466541/2_sunny_1125_2436_wallpaper.jpg" };
const afternoon_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466540/1_cloudy_1125_2436_wallpaper.jpg" };
const night_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466542/3_night_1125_2436_wallpaper.jpg" };

import morningbg from '../../assets/images/home_morning_bg.png';

import {
    Container,
    ImageBackground,
    HeaderView,
    HeaderViewTitle,
    HeaderViewSubtitle,
    SearchView,
    SearchTitle,
    SearchSubTitle,
    SearchInput,
    SearchButton,
    SearchButtonText,
  } from './styles';

const Search: React.FC = () => {

  const currentTime = new Date();

  const formattedDate = format(
    currentTime, 
    "dd'/'MM'/'yyyy"
  );

  const actualTime = useCallback(() => {
    const hour = currentTime.getHours();

    if(hour > 5 && hour < 13) {
      return 'BOM DIA!'
    }else if (hour >= 13 && hour < 19){
      return 'BOA TARDE!'
    }else {
      return 'BOA NOITE!'
    }
  },[]);

  const actualBg = useCallback(() => {
    const hour = currentTime.getHours();

    if(hour > 5 && hour < 13) {
      return morning_bg;
    }else if (hour >= 13 && hour < 19){
      return afternoon_bg;
    }else {
      return night_bg;
    }
  },[]);

  return (
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
        <Container>
          <ImageBackground source={actualBg()} >
            <HeaderView>
              <HeaderViewTitle>WHATEATHER</HeaderViewTitle>
              <HeaderViewSubtitle>O clima em suas mãos</HeaderViewSubtitle>
            </HeaderView>

            <SearchView>
              <SearchTitle>{actualTime()}</SearchTitle>
              <SearchSubTitle>{formattedDate}</SearchSubTitle>

              <SearchSubTitle>Entre com a cidade que deseja pesquisar</SearchSubTitle>

              <SearchInput></SearchInput>

              <SearchButton>
                <SearchButtonText>Pesquisar</SearchButtonText>
              </SearchButton>
            </SearchView>
          </ImageBackground>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Search;