// components/Hello.tsx
import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';



const morning_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466541/2_sunny_1125_2436_wallpaper.jpg" };
const afternoon_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466540/1_cloudy_1125_2436_wallpaper.jpg" };
const night_bg = { uri: "https://static.dribbble.com/users/648922/screenshots/6887377/attachments/1466542/3_night_1125_2436_wallpaper.jpg" };

import {
    Container,
    ImageBackground,
    HeaderView,
    HeaderViewTitle,
    HeaderViewSubtitle,
    AboutView,
  } from './styles';

const About: React.FC = () => {
  const currentTime = new Date();

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
              <HeaderViewTitle>WHATWEATHER</HeaderViewTitle>
              <HeaderViewSubtitle>O clima em suas mãos</HeaderViewSubtitle>
            </HeaderView>

            <AboutView>
              
            </AboutView>
          </ImageBackground>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default About;