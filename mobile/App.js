import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
=======
>>>>>>> 3725d650198039c62d6c0b3b66155515247bc1ca
import Routes from './src/routes';
import {StatusBar, YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
 'Unrecognized WebSocket connection' 
])
export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor= "#7D40E7"/>
    <Routes />
    </>
  );
}
