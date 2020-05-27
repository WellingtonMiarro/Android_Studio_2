import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  SectionList,
} from 'react-native';

import CalculoICQ from '../components/CalculoICQ'; //virou um componente de calculo
export default function Icq() {
  const DATA = [
    {
      title: 'Tabela ICQ - Mulher',
      data: [
        'Baixo: Inferior a 0,80',
        'Moderado: 0,81 a 0,85',
        'Alto: Superior 0,86',
      ],
    },
    {
      title: 'Tabela ICQ - Homem',
      data: [
        'Baixo: Inferior a 0,95',
        'Moderado: 0,96 a 1,0',
        'Alto: Superior 1,0',
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
      <CalculoICQ />
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
  container: {
    flex: 1,
    padding: 8,

    backgroundColor: '#fff',
  },

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
