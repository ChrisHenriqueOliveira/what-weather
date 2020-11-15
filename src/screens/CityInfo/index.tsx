import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, ActivityIndicator, ScrollView, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  SectionNextHoursContent,
  SectionNextHours,
  SectionNextHoursTitle,
  SectionNextHoursCard,
  SectionNextHoursCardDay,
  SectionNextHoursCardTemp,
  AddFavoriteButton,
  AddFavoriteButtonText,
  } from './styles';

  import icon1 from '../../assets/images/icons/01d.png';
  import icon2 from '../../assets/images/icons/02d.png';
  import icon3 from '../../assets/images/icons/03d.png';
  import icon4 from '../../assets/images/icons/04d.png';
  import icon5 from '../../assets/images/icons/09d.png';
  import icon6 from '../../assets/images/icons/10d.png';
  import icon7 from '../../assets/images/icons/11d.png';
  import icon8 from '../../assets/images/icons/13d.png';
  import icon9 from '../../assets/images/icons/50d.png';

import CurrentWeather from '../../components/CityInfoComponents/CurrentWeather';

import { cities } from '../../mocks/cities';
import { TouchableOpacity } from 'react-native-gesture-handler';

  interface CitiesProps {
    name: string;
    lat: number; 
    lng: number;
  }
  interface RouteParams {
    city: string;
  };

  interface ResponseData {
    current: WeatherData;
    hourly: WeatherData[];
    daily: DailyWeatherData[];
  };

  interface DailyWeatherData {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: DailyTempDataProps;
    feels_like: DailyFeelsLikeDataProps;
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

  interface DailyTempDataProps {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }

  interface DailyFeelsLikeDataProps {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }

  interface WeatherData {
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

const CityInfo: React.FC = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const { city } = route.params as RouteParams;

  const [cityCoditions, setCityConditions] = useState<ResponseData>();
  const [loading, setLoading] = useState<boolean>(true);
  const dataz = { 
      "lat": 33.44,
      "lon": -94.04,
      "timezone": "America/Chicago",
      "timezone_offset": -18000,
      "current": {
        "dt": 1599500992,
        "sunrise": 1599479687,
        "sunset": 1599525214,
        "temp": 30.13,
        "feels_like": 30.36,
        "pressure": 1014,
        "humidity": 48,
        "dew_point": 17.92,
        "uvi": 8.86,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3.6,
        "wind_deg": 240,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "céu limpo",
            "icon": "01d"
          }
        ]
      },
      "hourly": [
        {
          "dt": 1599498000,
          "temp": 30.13,
          "feels_like": 30.81,
          "pressure": 1014,
          "humidity": 48,
          "dew_point": 17.92,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 2.95,
          "wind_deg": 190,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599501600,
          "temp": 30.86,
          "feels_like": 31.91,
          "pressure": 1014,
          "humidity": 49,
          "dew_point": 18.91,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 3.05,
          "wind_deg": 187,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599505200,
          "temp": 31.92,
          "feels_like": 33.18,
          "pressure": 1012,
          "humidity": 47,
          "dew_point": 19.21,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.94,
          "wind_deg": 185,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599508800,
          "temp": 32.51,
          "feels_like": 33.81,
          "pressure": 1011,
          "humidity": 46,
          "dew_point": 19.4,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3,
          "wind_deg": 175,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599512400,
          "temp": 32.59,
          "feels_like": 34.1,
          "pressure": 1010,
          "humidity": 47,
          "dew_point": 19.82,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.98,
          "wind_deg": 169,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0.01
        },
        {
          "dt": 1599516000,
          "temp": 32.04,
          "feels_like": 34.09,
          "pressure": 1009,
          "humidity": 52,
          "dew_point": 21.07,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3,
          "wind_deg": 154,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0.02
        },
        {
          "dt": 1599519600,
          "temp": 30.65,
          "feels_like": 33.31,
          "pressure": 1009,
          "humidity": 61,
          "dew_point": 22.31,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 3.1,
          "wind_deg": 142,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0.02
        },
        {
          "dt": 1599523200,
          "temp": 27.93,
          "feels_like": 30.44,
          "pressure": 1009,
          "humidity": 69,
          "dew_point": 21.82,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 2.91,
          "wind_deg": 145,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0.08
        },
        {
          "dt": 1599526800,
          "temp": 26.28,
          "feels_like": 28.04,
          "pressure": 1009,
          "humidity": 69,
          "dew_point": 20.17,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.86,
          "wind_deg": 161,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0.15
        },
        {
          "dt": 1599530400,
          "temp": 25.58,
          "feels_like": 27.45,
          "pressure": 1010,
          "humidity": 70,
          "dew_point": 19.83,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.4,
          "wind_deg": 178,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0.08
        },
        {
          "dt": 1599534000,
          "temp": 25,
          "feels_like": 27.13,
          "pressure": 1011,
          "humidity": 72,
          "dew_point": 19.8,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 1.97,
          "wind_deg": 177,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0.07
        },
        {
          "dt": 1599537600,
          "temp": 24.48,
          "feels_like": 26.44,
          "pressure": 1010,
          "humidity": 74,
          "dew_point": 19.75,
          "clouds": 1,
          "visibility": 10000,
          "wind_speed": 2.17,
          "wind_deg": 154,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0.05
        },
        {
          "dt": 1599541200,
          "temp": 23.98,
          "feels_like": 25.4,
          "pressure": 1010,
          "humidity": 75,
          "dew_point": 19.42,
          "clouds": 2,
          "visibility": 10000,
          "wind_speed": 2.77,
          "wind_deg": 151,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0.05
        },
        {
          "dt": 1599544800,
          "temp": 23.4,
          "feels_like": 24.28,
          "pressure": 1010,
          "humidity": 74,
          "dew_point": 18.69,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 3.04,
          "wind_deg": 150,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0.09
        },
        {
          "dt": 1599548400,
          "temp": 22.97,
          "feels_like": 23.56,
          "pressure": 1010,
          "humidity": 73,
          "dew_point": 17.97,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 3.06,
          "wind_deg": 160,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0.04
        },
        {
          "dt": 1599552000,
          "temp": 22.56,
          "feels_like": 23.03,
          "pressure": 1010,
          "humidity": 74,
          "dew_point": 17.91,
          "clouds": 93,
          "visibility": 10000,
          "wind_speed": 3.13,
          "wind_deg": 157,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0.04
        },
        {
          "dt": 1599555600,
          "temp": 22.2,
          "feels_like": 22.93,
          "pressure": 1010,
          "humidity": 78,
          "dew_point": 18.35,
          "clouds": 72,
          "visibility": 10000,
          "wind_speed": 3.06,
          "wind_deg": 162,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599559200,
          "temp": 21.96,
          "feels_like": 22.97,
          "pressure": 1010,
          "humidity": 82,
          "dew_point": 18.92,
          "clouds": 54,
          "visibility": 10000,
          "wind_speed": 3.01,
          "wind_deg": 159,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599562800,
          "temp": 21.48,
          "feels_like": 22.6,
          "pressure": 1010,
          "humidity": 86,
          "dew_point": 19.22,
          "clouds": 43,
          "visibility": 10000,
          "wind_speed": 3.04,
          "wind_deg": 154,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "nuvens dispersas",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599566400,
          "temp": 21.15,
          "feels_like": 22.48,
          "pressure": 1011,
          "humidity": 89,
          "dew_point": 19.36,
          "clouds": 36,
          "visibility": 10000,
          "wind_speed": 2.89,
          "wind_deg": 153,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "nuvens dispersas",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599570000,
          "temp": 22.22,
          "feels_like": 23.88,
          "pressure": 1011,
          "humidity": 88,
          "dew_point": 20.17,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3,
          "wind_deg": 151,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599573600,
          "temp": 24.37,
          "feels_like": 26.22,
          "pressure": 1012,
          "humidity": 81,
          "dew_point": 21.08,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3.26,
          "wind_deg": 158,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599577200,
          "temp": 26.5,
          "feels_like": 28.58,
          "pressure": 1012,
          "humidity": 74,
          "dew_point": 21.71,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3.36,
          "wind_deg": 163,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599580800,
          "temp": 28.62,
          "feels_like": 30.68,
          "pressure": 1012,
          "humidity": 66,
          "dew_point": 21.73,
          "clouds": 3,
          "visibility": 10000,
          "wind_speed": 3.5,
          "wind_deg": 170,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599584400,
          "temp": 29.49,
          "feels_like": 31.37,
          "pressure": 1012,
          "humidity": 62,
          "dew_point": 21.54,
          "clouds": 11,
          "visibility": 10000,
          "wind_speed": 3.6,
          "wind_deg": 167,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599588000,
          "temp": 30.15,
          "feels_like": 31.72,
          "pressure": 1012,
          "humidity": 58,
          "dew_point": 21.09,
          "clouds": 15,
          "visibility": 10000,
          "wind_speed": 3.71,
          "wind_deg": 160,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599591600,
          "temp": 31.17,
          "feels_like": 32.74,
          "pressure": 1011,
          "humidity": 53,
          "dew_point": 20.62,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3.34,
          "wind_deg": 151,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599595200,
          "temp": 31.83,
          "feels_like": 33.42,
          "pressure": 1011,
          "humidity": 49,
          "dew_point": 19.96,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.85,
          "wind_deg": 143,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599598800,
          "temp": 32.11,
          "feels_like": 33.79,
          "pressure": 1010,
          "humidity": 48,
          "dew_point": 19.76,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.68,
          "wind_deg": 141,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599602400,
          "temp": 32.11,
          "feels_like": 33.95,
          "pressure": 1009,
          "humidity": 48,
          "dew_point": 19.91,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.45,
          "wind_deg": 139,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599606000,
          "temp": 31.54,
          "feels_like": 34.59,
          "pressure": 1009,
          "humidity": 55,
          "dew_point": 21.53,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 1.9,
          "wind_deg": 132,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599609600,
          "temp": 28.48,
          "feels_like": 31.05,
          "pressure": 1010,
          "humidity": 63,
          "dew_point": 20.8,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.12,
          "wind_deg": 116,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599613200,
          "temp": 26.41,
          "feels_like": 27.63,
          "pressure": 1010,
          "humidity": 64,
          "dew_point": 19.27,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.9,
          "wind_deg": 108,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599616800,
          "temp": 25.46,
          "feels_like": 25.94,
          "pressure": 1011,
          "humidity": 65,
          "dew_point": 18.58,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3.55,
          "wind_deg": 108,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599620400,
          "temp": 25.29,
          "feels_like": 24.94,
          "pressure": 1011,
          "humidity": 63,
          "dew_point": 17.88,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 4.33,
          "wind_deg": 122,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599624000,
          "temp": 24.28,
          "feels_like": 24.29,
          "pressure": 1012,
          "humidity": 65,
          "dew_point": 17.48,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 3.54,
          "wind_deg": 124,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599627600,
          "temp": 23.53,
          "feels_like": 23.66,
          "pressure": 1012,
          "humidity": 68,
          "dew_point": 17.36,
          "clouds": 16,
          "visibility": 10000,
          "wind_speed": 3.37,
          "wind_deg": 113,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599631200,
          "temp": 22.72,
          "feels_like": 23.07,
          "pressure": 1012,
          "humidity": 71,
          "dew_point": 17.22,
          "clouds": 22,
          "visibility": 10000,
          "wind_speed": 3,
          "wind_deg": 108,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599634800,
          "temp": 22.26,
          "feels_like": 22.84,
          "pressure": 1012,
          "humidity": 73,
          "dew_point": 17.2,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 2.67,
          "wind_deg": 113,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599638400,
          "temp": 21.81,
          "feels_like": 22.38,
          "pressure": 1013,
          "humidity": 75,
          "dew_point": 17.3,
          "clouds": 87,
          "visibility": 10000,
          "wind_speed": 2.69,
          "wind_deg": 126,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599642000,
          "temp": 21.53,
          "feels_like": 22.37,
          "pressure": 1013,
          "humidity": 77,
          "dew_point": 17.49,
          "clouds": 59,
          "visibility": 10000,
          "wind_speed": 2.38,
          "wind_deg": 124,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599645600,
          "temp": 21.31,
          "feels_like": 21.95,
          "pressure": 1013,
          "humidity": 79,
          "dew_point": 17.7,
          "clouds": 45,
          "visibility": 10000,
          "wind_speed": 2.79,
          "wind_deg": 104,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "nuvens dispersas",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599649200,
          "temp": 21.05,
          "feels_like": 21.89,
          "pressure": 1013,
          "humidity": 81,
          "dew_point": 17.81,
          "clouds": 43,
          "visibility": 10000,
          "wind_speed": 2.58,
          "wind_deg": 111,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "nuvens dispersas",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599652800,
          "temp": 20.88,
          "feels_like": 21.96,
          "pressure": 1014,
          "humidity": 83,
          "dew_point": 18,
          "clouds": 40,
          "visibility": 10000,
          "wind_speed": 2.37,
          "wind_deg": 116,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "nuvens dispersas",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599656400,
          "temp": 22.03,
          "feels_like": 23.54,
          "pressure": 1014,
          "humidity": 83,
          "dew_point": 19.18,
          "clouds": 20,
          "visibility": 10000,
          "wind_speed": 2.46,
          "wind_deg": 114,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599660000,
          "temp": 24.17,
          "feels_like": 26.01,
          "pressure": 1015,
          "humidity": 79,
          "dew_point": 20.4,
          "clouds": 11,
          "visibility": 10000,
          "wind_speed": 2.85,
          "wind_deg": 115,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599663600,
          "temp": 26.5,
          "feels_like": 28.65,
          "pressure": 1015,
          "humidity": 73,
          "dew_point": 21.47,
          "clouds": 8,
          "visibility": 10000,
          "wind_speed": 3.09,
          "wind_deg": 114,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1599667200,
          "temp": 28.5,
          "feels_like": 30.53,
          "pressure": 1016,
          "humidity": 67,
          "dew_point": 21.95,
          "clouds": 5,
          "visibility": 10000,
          "wind_speed": 3.63,
          "wind_deg": 122,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "pop": 0
        }
      ],
      "daily": [
        {
          "dt": 1599501600,
          "sunrise": 1599479687,
          "sunset": 1599525214,
          "temp": {
            "day": 30.86,
            "min": 23.4,
            "max": 32.07,
            "night": 23.4,
            "eve": 28.07,
            "morn": 30.13
          },
          "feels_like": {
            "day": 31.91,
            "night": 24.28,
            "eve": 30.52,
            "morn": 31.16
          },
          "pressure": 1014,
          "humidity": 49,
          "dew_point": 18.91,
          "wind_speed": 3.05,
          "wind_deg": 187,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "clouds": 1,
          "pop": 0.09,
          "uvi": 8.86
        },
        {
          "dt": 1599588000,
          "sunrise": 1599566126,
          "sunset": 1599611532,
          "temp": {
            "day": 30.15,
            "min": 21.15,
            "max": 32.11,
            "night": 22.72,
            "eve": 28.48,
            "morn": 21.15
          },
          "feels_like": {
            "day": 31.72,
            "night": 23.07,
            "eve": 31.05,
            "morn": 22.48
          },
          "pressure": 1012,
          "humidity": 58,
          "dew_point": 21.09,
          "wind_speed": 3.71,
          "wind_deg": 160,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02d"
            }
          ],
          "clouds": 15,
          "pop": 0,
          "uvi": 9.55
        },
        {
          "dt": 1599674400,
          "sunrise": 1599652566,
          "sunset": 1599697850,
          "temp": {
            "day": 30.86,
            "min": 20.88,
            "max": 30.86,
            "night": 22.98,
            "eve": 26.95,
            "morn": 20.88
          },
          "feels_like": {
            "day": 32.8,
            "night": 25.85,
            "eve": 31.7,
            "morn": 21.96
          },
          "pressure": 1015,
          "humidity": 58,
          "dew_point": 21.77,
          "wind_speed": 3.66,
          "wind_deg": 125,
          "weather": [
            {
              "id": 502,
              "main": "Rain",
              "description": "chuva forte",
              "icon": "10d"
            }
          ],
          "clouds": 3,
          "pop": 0.88,
          "rain": 13.17,
          "uvi": 9.99
        },
        {
          "dt": 1599760800,
          "sunrise": 1599739005,
          "sunset": 1599784168,
          "temp": {
            "day": 24.49,
            "min": 21.79,
            "max": 27.48,
            "night": 22.08,
            "eve": 24.78,
            "morn": 21.79
          },
          "feels_like": {
            "day": 27.7,
            "night": 24.42,
            "eve": 27.88,
            "morn": 24.52
          },
          "pressure": 1021,
          "humidity": 89,
          "dew_point": 22.66,
          "wind_speed": 2.55,
          "wind_deg": 3,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "chuva moderada",
              "icon": "10d"
            }
          ],
          "clouds": 97,
          "pop": 0.99,
          "rain": 5.79,
          "uvi": 8.89
        },
        {
          "dt": 1599847200,
          "sunrise": 1599825444,
          "sunset": 1599870485,
          "temp": {
            "day": 30.01,
            "min": 21.27,
            "max": 31.37,
            "night": 23.06,
            "eve": 27.59,
            "morn": 21.27
          },
          "feels_like": {
            "day": 33.89,
            "night": 25.97,
            "eve": 30.91,
            "morn": 23.91
          },
          "pressure": 1017,
          "humidity": 66,
          "dew_point": 22.99,
          "wind_speed": 1.91,
          "wind_deg": 338,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": 39,
          "pop": 0.56,
          "rain": 2.65,
          "uvi": 9.08
        },
        {
          "dt": 1599933600,
          "sunrise": 1599911883,
          "sunset": 1599956802,
          "temp": {
            "day": 30.49,
            "min": 21.66,
            "max": 31.25,
            "night": 23.2,
            "eve": 27.35,
            "morn": 21.66
          },
          "feels_like": {
            "day": 34.04,
            "night": 25.42,
            "eve": 31.46,
            "morn": 24.65
          },
          "pressure": 1014,
          "humidity": 61,
          "dew_point": 22.15,
          "wind_speed": 1.72,
          "wind_deg": 4,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "chuva moderada",
              "icon": "10d"
            }
          ],
          "clouds": 61,
          "pop": 0.61,
          "rain": 3.49,
          "uvi": 8.94
        },
        {
          "dt": 1600020000,
          "sunrise": 1599998323,
          "sunset": 1600043119,
          "temp": {
            "day": 30.6,
            "min": 21.23,
            "max": 31.47,
            "night": 23.11,
            "eve": 27,
            "morn": 21.23
          },
          "feels_like": {
            "day": 32.51,
            "night": 24.93,
            "eve": 28.94,
            "morn": 22.95
          },
          "pressure": 1016,
          "humidity": 54,
          "dew_point": 20.49,
          "wind_speed": 2.7,
          "wind_deg": 55,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": 57,
          "pop": 0.31,
          "rain": 0.41,
          "uvi": 8.86
        },
        {
          "dt": 1600106400,
          "sunrise": 1600084762,
          "sunset": 1600129436,
          "temp": {
            "day": 21.79,
            "min": 20.43,
            "max": 23.41,
            "night": 20.43,
            "eve": 21.65,
            "morn": 22.28
          },
          "feels_like": {
            "day": 22.78,
            "night": 21.3,
            "eve": 22.35,
            "morn": 23.33
          },
          "pressure": 1020,
          "humidity": 86,
          "dew_point": 19.41,
          "wind_speed": 3.42,
          "wind_deg": 33,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": 100,
          "pop": 0.08,
          "uvi": 8.96
        }
      ]
  }

  function utcConvert(value: number) {
    var d = new Date(value * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;
			
    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh == 0) {
      h = 12;
	  }
	
	  // ie: 2013-02-18, 8:35 AM	
    time = dd + '/' + mm + ' - ' + h + ':' + min + ' ' + ampm;
  
    return time;
  }

  useEffect(() => {
    navigation.setOptions({
      title: `Condições em ${city}`,
    });

    setLoading(true);

    const selectedCity: CitiesProps[] = cities.filter((mockCity) => {
      return mockCity.name === city;
    })

    const lat = selectedCity[0].lat;
    const lng = selectedCity[0].lng;

     fetch(
       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&lang=pt_BR&appid=bc727791ed2a7f898dde493dbe15c0b2`,
     )
       .then(response => response.json())
       .then(data => {
         setCityConditions(data);
        //  console.log(data);
         
         setLoading(false);
       })

    //setCityConditions(data);
  }, [navigation]);

  const handleWeatherIcon = useCallback((value) => {

    if (value >= 200 && value <= 232) {
      return <Image source={icon7}/>
    }else if (value >= 300 && value <= 321) {
      return <Image source={icon5}/>
    }else if (value >= 500 && value <= 504) {
      return <Image source={icon6}/>
    }else if (value >= 511 && value <= 511) {
      return <Image source={icon7}/>
    }else if (value >= 520 && value <= 531) {
      return <Image source={icon5}/>
    }else if (value >= 600 && value <= 622) {
      return <Image source={icon8}/>
    }else if (value >= 701 && value <= 781) {
      return <Image source={icon9}/>
    }else if (value >= 800 && value <= 800) {
      return <Image source={icon1}/>
    }else if (value >= 801 && value <= 804) {
      return <Image source={icon2}/>
    }


  },[])

  const storeData = async () => {
    console.log('add favorites');
    // try {
    //   const value = await AsyncStorage.getItem('@MyFavorites');
    //   if (value !== null) {
    //     // We have data!!
    //     console.log(value);
    //   }
    // } catch (error) {
    //   // Error retrieving data
    // }

    // try {
    //   await AsyncStorage.setItem(
    //     '@MyFavorites',
    //     'I like to save it.'
    //   );
    // } catch (error) {
    //   // Error saving data
    // }
  };

  return (
    <Container>

      {loading ? (
        <View style={{ flex: 1, justifyContent:"center", alignItems:"center"}}>
          <ActivityIndicator
            size="large"
            color="#000"
          />
          <Text>Aguarde, carregando dados...</Text>
        </View>
      ) : (
        <ScrollView>
          <CurrentWeather data={cityCoditions?.current}></CurrentWeather>

          <SectionNextHours>
              <SectionNextHoursTitle>Próximas horas</SectionNextHoursTitle>

              <SectionNextHoursContent>
                {cityCoditions?.hourly.map((item, index )=> (
                  <SectionNextHoursCard key={index}>
                    {handleWeatherIcon(item.weather[0].id)}
                    <SectionNextHoursCardDay>{`${utcConvert(item.dt)}`}</SectionNextHoursCardDay> 
                    <SectionNextHoursCardTemp>{`${item.temp.toFixed(0)}°`}</SectionNextHoursCardTemp> 
                  </SectionNextHoursCard>
              ))}
              </SectionNextHoursContent>
          </SectionNextHours>

          <FlatList
          style={styles.flatlist}
          data={[
            { key: 'Poluição do ar (qualidade): Moderada' },
            { key: 'Transito: Movimentado/Agitado' },
            { key: 'Áreas de alagamento: Nenhuma' },
            { key: 'Áreas de inundação: Nenhuma' },
            { key: 'Inversão térmica: Média' },
            { key: 'Desmatamento: Nenhum registro em 24h' },
          ]}
          renderItem={({ item }: any) => 
          <TouchableOpacity>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>}
        />

          <AddFavoriteButton onPress={() => storeData()}>
            <Feather name="heart" size={24} color="#eee" style={{marginHorizontal: 16}}/>
            <AddFavoriteButtonText>Adicionar aos favoritos</AddFavoriteButtonText>
            </AddFavoriteButton>
        </ScrollView>
      )}
    </Container>
  );
};

export default CityInfo;

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 16,
  },
  item: {
    padding: 10,
    marginTop: 4,
    marginHorizontal: 24,
    fontSize: 18,
    height: 44,
    width: Dimensions.get('window').width,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});