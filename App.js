import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Home from './components/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default function App() {
  return (
    <LinearGradient colors = {
      ['#0093E9', '#80D0C7']
    }
    style = {
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    } >
    <View style = {styles.container} >

    <Home />
    </View> 
    </LinearGradient>
  );
}