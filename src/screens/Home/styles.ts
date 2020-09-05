import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;

  padding: ${32 + getBottomSpace()}px 0 0 0 ;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Montserrat-Bold';
`;

export const HeaderSubtitle = styled.Text`
  margin-top: 8px;

  font-size: 16px;
  color: #f4ede8;
  font-family: 'Montserrat-Bold';
`;

export const Body = styled.View`
 
`;

export const BodyImage = styled.Image`
  width: 350px;
  height: 300px;
`;

