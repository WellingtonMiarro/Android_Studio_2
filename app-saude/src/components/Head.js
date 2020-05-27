import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.cabecalhoText}>
        Aplictivo para uma vida mais saudavel.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#3E38F2',
    marginBottom: 16,
    padding: 20,
  },
  cabecalhoText: {
    color: '#fff',
    fontSize: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
