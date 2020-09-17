import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/541; //541 is actual image width

export const Container = styled.View``;

export const CurrentInfo = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding: 32px;
`;

export const CurrentInfoLeft = styled.View`
  display: flex;
  flex-direction: row;

  flex: 1;

  align-items: center;
`;

export const CurrentInfoTemp = styled.Text`
  font-size: 42px;
  color: #000;
  font-family: 'Montserrat-Bold';
`;

export const CurrentInfoWeather = styled.Text`
  margin-left: 8px;
  
  font-size: 20px;
  color: #000;
  font-family: 'Montserrat-Medium';
`;

export const SunInfo = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const SunInfoCard = styled.View`
  display: flex;

  align-self: center;
  justify-content: center;
`;

export const SunInfoCardIcon = styled.View``;

export const SunInfoCardDesc = styled.Text`
  text-align: center;
  margin-top: 8px;

  font-size: 20px;
  color: #000;
  font-family: 'Montserrat-Medium';
`;

export const AdditionalInfo = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-horizontal: 32px;
  padding-vertical: 16px;
  `;

export const AdditionalInfoCard = styled.View`
  display: flex;
  align-items: center;
`;

export const AdditionalInfoCardValue = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: 'Montserrat-Bold';
`;

export const AdditionalInfoCardDesc = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Montserrat-Medium';
`;