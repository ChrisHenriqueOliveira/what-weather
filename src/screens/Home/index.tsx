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

import bodyImage from '../../assets/images/home_image.svg';

const morning_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466541/2_sunny_1125_2436_wallpaper.jpg" };
const afternoon_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466540/1_cloudy_1125_2436_wallpaper.jpg" };
const night_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466542/3_night_1125_2436_wallpaper.jpg" };

import morningbg from '../../assets/images/home_morning_bg.png';

import {
    Container,
    ImageBackground,
    Header,
    HeaderTitle,
    HeaderSubtitle,
    Body,
    BodyImage,
  } from './styles';

const Home: React.FC = () => {

  return (
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
        <Container>
          <ImageBackground source={night_bg} >
            <Header>
              <HeaderTitle>WHATEATHER</HeaderTitle>
              <HeaderSubtitle>O clima em suas mãos</HeaderSubtitle>
            </Header>
            <Body>
              <BodyImage source={bodyImage}></BodyImage>
            </Body>
          </ImageBackground>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;