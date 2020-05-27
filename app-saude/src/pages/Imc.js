import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
} from 'react-native';

import CalculoIMC from '../components/CalculoIMC';

export default function Imc() {
  const DATA = [
    {
      title: 'Tabela IMC',
      data: [
        'Normal: Entre 18,5 e 24,9 kg/m²',
        'Sobrepeso: Entre 25 e 29,9 kg/m²',
        'Obesidade: Acima de 30 kg/m²',
      ],
    },
  ];

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CalculoIMC />

      <SafeAreaView style={styles.header}>
        <SectionList
          sections={DATA}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#CFCFCF',
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontFamily: 'Time New Roma',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
