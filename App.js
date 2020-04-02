import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Previsions from './components/Previsions';

//Style du container la page App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const Stack = createStackNavigator();

// Constante permettant de styliser la barre de naviguation (la faire disparaitre)

const navHeaderStyle = {
  borderWidth: 0,
  shadowColor: 'transparent',
  height: 0,
}

//Fonction App où se trouve les composants Home et Previsions

export default function App() {

//Contenus d'App (les composants Home et Previsions)

  return (

// Fonctionnalité de ReactNative permettant d'avoir plusieurs page et de pouvoir naviguer entre elles

    <NavigationContainer style = {styles.container}>
      <Stack.Navigator>

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
    </Stack.Navigator>
    </NavigationContainer>
  );
}