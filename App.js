import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Previsions from './components/Previsions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const Stack = createStackNavigator();

const navHeaderStyle = {
  borderWidth: 0,
  shadowColor: 'transparent',
  height: 0
}

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>
     
    {/* <LinearGradient colors = {
      ['#0093E9', '#80D0C7']
    }
    style = {
      {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    } > */}

<Stack.Screen
               name="Accueil"
               component={Home}
               options={{
                  title: 'Accueil',
                  headerStyle: navHeaderStyle,
               }}
            />

<Stack.Screen
               name="Prochains jours"
               component={Previsions}
               options={{
                  title: 'Prochains jours',
                  headerStyle: navHeaderStyle,
               }}
            />
  

    {/* </LinearGradient> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}