// components/Hello.tsx
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../../types';

import {
  Container,
  Title,
} from './styles';

const NotFoundScreen: React.FC<StackScreenProps<RootStackParamList, 'NotFound'>> = ({navigation}) => {
  return (
    <Container>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default NotFoundScreen;