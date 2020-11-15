import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const currentTime = new Date();
const hour = currentTime.getHours();

let fontColor;
let buttonColor;
let buttonFontColor;
let textShadow;

if(hour > 5 && hour < 13) {
  fontColor = '#000052';
  textShadow = '#f4ede8';

  buttonFontColor = '#f4ede8';
  buttonColor = '#000052';
}else if (hour >= 13 && hour < 19){
  fontColor = '#f4ede8';
  textShadow = '#000052';

  buttonFontColor = '#f4ede8';
  buttonColor = '#000052';
}else {
  fontColor = '#f4ede8';
  textShadow = '#000052';

  buttonFontColor = '#000052';
  buttonColor = '#f4ede8';
}

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: ${32 + getBottomSpace()}px 0 0 0 ;
`;

export const HeaderView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderViewTitle = styled.Text`
  font-size: 24px;
  color: ${fontColor};
  font-family: 'Montserrat-Bold';

  text-shadow: 2px 2px #000052;
`;

export const HeaderViewSubtitle = styled.Text`
  margin-top: 8px;

  font-size: 16px;
  color: ${fontColor};
  font-family: 'Montserrat-Bold';

  text-shadow: 2px 2px #000052;
`;

export const FavoritesView = styled.View`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;
