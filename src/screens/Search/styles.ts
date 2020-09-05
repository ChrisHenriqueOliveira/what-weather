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

if(hour > 5 && hour < 13) {
  fontColor = '#000052';

  buttonFontColor = '#f4ede8';
  buttonColor = '#000052';
}else if (hour >= 13 && hour < 19){
  fontColor = '#f4ede8';

  buttonFontColor = '#f4ede8';
  buttonColor = '#000052';
}else {
  fontColor = '#f4ede8';

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
`;

export const HeaderViewSubtitle = styled.Text`
  margin-top: 8px;

  font-size: 16px;
  color: ${fontColor};
  font-family: 'Montserrat-Bold';
`;

export const SearchView = styled.View`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchTitle = styled.Text`
  margin-top: 40px;
  
  font-size: 24px;
  color: ${fontColor};
  font-family: 'Montserrat-Bold';
`;

export const SearchSubTitle = styled.Text`
  margin-top: 8px;

  font-size: 16px;
  color: ${fontColor};
  font-family: 'Montserrat-Bold';
`;

export const SearchInput = styled.TextInput`
  border: 1px solid #f4ede8;
  border-radius: 8px;

  height: 40px;
  width: ${width * 0.9 };
  margin-top: 16px;

  padding: 0px 16px;

  color: ${fontColor};
  background-color: rgba(244,237,232,0.3);
  font-family: 'Montserrat-Regular';
`;

export const SearchButton = styled(RectButton)`
  background: ${buttonColor};

  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${width * 0.9 };
`;

export const SearchButtonText = styled.Text`
  font-size: 16px;
  color: ${buttonFontColor};;
  font-family: 'Montserrat-Bold';
`;

