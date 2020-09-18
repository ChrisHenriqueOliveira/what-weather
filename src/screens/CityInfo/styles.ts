import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #70A9EF;

  padding-bottom: 30px;
`;

export const SectionNextHours = styled.View``;

export const SectionNextHoursTitle = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: 'Montserrat-Bold';
  margin: 0 24px 12px;
`;

export const SectionNextHoursContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const SectionNextHoursCard = styled.View`
  padding: 12px;
  border-radius: 10px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const SectionNextHoursCardDay = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
`;

export const SectionNextHoursCardTemp = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 18px;
`;
