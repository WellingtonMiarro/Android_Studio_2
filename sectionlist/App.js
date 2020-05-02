import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';

const DATA = [
  {
    title: 'Atividade',
    data: ['Atividade 01', 'Atividade 02', 'Atividade 03'],
  },
  {
    title: 'Lista',
    data: ['Lista 01', 'Lista 02', 'Lista 03'],
  },
  {
    title: 'Trabalhos',
    data: ['Trabalho 01', 'Trabalho 02', 'Trabalho 03'],
  },
  {
    title: 'Prova',
    data: ['Prova 01', 'Prova 02','Prova 03'],
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => 
              <Text style={styles.header}>
                {title}
              </Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#81DAF5',
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 18,
  },
});