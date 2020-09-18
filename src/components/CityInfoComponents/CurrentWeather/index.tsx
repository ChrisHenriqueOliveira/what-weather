import React, { useCallback } from 'react';

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

  import icon1 from '../../../assets/images/icons/01d.png';
  import icon2 from '../../../assets/images/icons/02d.png';
  import icon3 from '../../../assets/images/icons/03d.png';
  import icon4 from '../../../assets/images/icons/04d.png';
  import icon5 from '../../../assets/images/icons/09d.png';
  import icon6 from '../../../assets/images/icons/10d.png';
  import icon7 from '../../../assets/images/icons/11d.png';
  import icon8 from '../../../assets/images/icons/13d.png';
  import icon9 from '../../../assets/images/icons/50d.png';

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
    rain: number;
    snow: number;
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
	time = h + ':' + min + ' ' + ampm;
		
	return time;
  }

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

  return (
    <Container>
        <CurrentInfo>
          <CurrentInfoLeft>
            <CurrentInfoTemp>{`${data?.temp.toFixed(0)}°`}</CurrentInfoTemp>
            <CurrentInfoWeather> | {capitalizeFirstLetter(data?.weather[0].description)}</CurrentInfoWeather>
          </CurrentInfoLeft>
          {handleWeatherIcon(data?.weather[0].id)}
        </CurrentInfo>
        
        <SunInfo>
          <SunInfoCard>
            <SunInfoCardIcon>
              <Feather name="sunrise" size={45} color="black" style={{marginHorizontal: 32}}/>
            </SunInfoCardIcon>
            <SunInfoCardDesc>{utcConvert(data?.sunrise)}</SunInfoCardDesc>
          </SunInfoCard>

          <SunInfoCard>
            <SunInfoCardIcon>
              <Feather name="sunset" size={45} color="black" style={{marginHorizontal: 32}}/>
            </SunInfoCardIcon>
            <SunInfoCardDesc>{utcConvert(data?.sunset)}</SunInfoCardDesc>
          </SunInfoCard>
        </SunInfo>

        <AdditionalInfo style={{ paddingTop: 32 }}>
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

        <AdditionalInfo>
          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{`${data?.feels_like.toFixed(0)}°`}</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Feels Like</AdditionalInfoCardDesc>
          </AdditionalInfoCard>

          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{data?.pressure} hPa</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Pressure</AdditionalInfoCardDesc>
          </AdditionalInfoCard>

          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{`${data?.dew_point.toFixed(0)}°`}</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Dew Point</AdditionalInfoCardDesc>
          </AdditionalInfoCard>
        </AdditionalInfo>

        <AdditionalInfo style={{ paddingBottom: 32 }}>
          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{`${data?.clouds.toFixed(0)}%`}</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Cloudiness</AdditionalInfoCardDesc>
          </AdditionalInfoCard>

          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{`${data?.visibility}m`}</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Visibility</AdditionalInfoCardDesc>
          </AdditionalInfoCard>

          <AdditionalInfoCard>
            <AdditionalInfoCardValue>{`${data?.wind_deg.toFixed(0)}°`}</AdditionalInfoCardValue>
            <AdditionalInfoCardDesc>Wind Degrees</AdditionalInfoCardDesc>
          </AdditionalInfoCard>
        </AdditionalInfo>

        {data?.rain && data?.snow && (
          <AdditionalInfo style={{ paddingBottom: 32 }}>
            <AdditionalInfoCard>
              <AdditionalInfoCardValue>{`${data?.rain}mm`}</AdditionalInfoCardValue>
              <AdditionalInfoCardDesc>Cloudiness</AdditionalInfoCardDesc>
            </AdditionalInfoCard>

            <AdditionalInfoCard>
              <AdditionalInfoCardValue>{`${data?.snow}mm`}</AdditionalInfoCardValue>
              <AdditionalInfoCardDesc>Visibility</AdditionalInfoCardDesc>
            </AdditionalInfoCard>
        </AdditionalInfo>
        )}
        
    </Container>
  );
};

export default CurrentWeather;

