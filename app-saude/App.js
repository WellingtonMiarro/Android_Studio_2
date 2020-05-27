import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importar as telas
import Home from './src/pages/Home';
import IMC from './src/pages/Imc';
import ICQ from './src/pages/Icq';
import PesoIdeal from './src/pages/PesoIdeal';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Minha Saúde App"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#3E38F2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            border: {
              backgroundColor: 'red',
            },
          }}
        />

        <Stack.Screen
          name="Imc"
          component={IMC}
          options={{
            title: 'Calculo IMC',
            headerStyle: {
              backgroundColor: '#5C73F2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Icq"
          component={ICQ}
          options={{
            title: 'Calculo ICQ',
            headerStyle: {
              backgroundColor: '#6B4C7F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="PesoIdeal"
          component={PesoIdeal}
          options={{
            title: 'Calculo Peso ideal',
            headerStyle: {
              backgroundColor: '#82D9D9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Sobre',

            headerStyle: {
              backgroundColor: '#A9F5A9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
