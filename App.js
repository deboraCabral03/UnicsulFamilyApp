import * as React from 'react';
import Constants from 'expo-constants';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/Routes';

export default function App() {
  
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}