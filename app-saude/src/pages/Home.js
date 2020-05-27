import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Head from '../components/Head';

export default function Home({ navigation }) {
  return (
    <View>
      <Head />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate('Imc')}>
          <Text style={styles.label}>Calculo IMC</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('Icq')}>
          <Text style={styles.label}>Calculo ICQ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn3}
          onPress={() => navigation.navigate('PesoIdeal')}>
          <Text style={styles.label}>Calculo Peso Ideal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.label}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    marginTop: 10,
    padding: 4,
    backgroundColor: '#A9F5A9',
    borderRadius: 4,
  },
  btn1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    marginTop: 10,
    padding: 4,
    backgroundColor: '#5C73F2',
    borderRadius: 4,
  },
  btn2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    marginTop: 10,
    padding: 4,
    backgroundColor: '#6B4C7F',
    borderRadius: 4,
  },
  btn3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    marginTop: 10,
    padding: 4,
    backgroundColor: '#82D9D9',
    borderRadius: 4,
  },
  label: {
    fontSize: 26,
    color: '#fff',
  },
});
