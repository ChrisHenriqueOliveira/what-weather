import React from 'react';

import { Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  CurrentInfo,
  CurrentInfoLeft,
  CurrentInfoTemp,
  CurrentInfoWeather,
  SunInfo,
  SunInfoCard,
  SunInfoCardIcon,
  SunInfoCardDesc,
  AdditionalInfo,
  AdditionalInfoCard,
  AdditionalInfoCardValue,
  AdditionalInfoCardDesc,
  } from './styles';

  import sunWeather from '../../../assets/images/weathers/sunWeather.png';

  interface CurrentWatherProps {
    data: CurrentProps;
  }

  interface CurrentProps {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherDataProps[];
  };

  interface WeatherDataProps {
    id: number;
    description: string;
  };

const CurrentWeather: React.FC<CurrentWatherProps> = ( { data } ) => {

  function capitalizeFirstLetter(text: string) {
    return text?.charAt(0).toUpperCase() + text?.slice(1) || '';
  }

  return (
    <Container>
        <CurrentInfo>
          <CurrentInfoLeft>
            <CurrentInfoTemp>{`${data?.temp.toFixed(0)}°`}</CurrentInfoTemp>
            <CurrentInfoWeather> | {capitalizeFirstLetter(data?.weather[0].description)}</CurrentInfoWeather>
          </CurrentInfoLeft>
          <Image source={sunWeather} style={{marginLeft: 8}}></Image>
        </CurrentInfo>
        
        <SunInfo>
          <SunInfoCard>
            <SunInfoCardIcon>
              <Feather name="sunrise" size={45} color="black" style={{marginHorizontal: 16}}/>
            </SunInfoCardIcon>
            <SunInfoCardDesc>06:20</SunInfoCardDesc>
          </SunInfoCard>

          <SunInfoCard>
            <SunInfoCardIcon>
              <Feather name="sunset" size={45} color="black" style={{marginHorizontal: 16}}/>
            </SunInfoCardIcon>
            <SunInfoCardDesc>18:20</SunInfoCardDesc>
          </SunInfoCard>
        </SunInfo>

        <AdditionalInfo>
          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{data?.humidity}%</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Humidity</AdditionalInfoCardDesc>
          </AdditionalInfoCard>

          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{data?.uvi}</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>UV Index</AdditionalInfoCardDesc>
          </AdditionalInfoCard>

          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{data?.wind_speed} kmh</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Wind</AdditionalInfoCardDesc>
          </AdditionalInfoCard>
        </AdditionalInfo>
    </Container>
  );
};

export default CurrentWeather;

