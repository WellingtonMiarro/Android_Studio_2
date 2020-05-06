import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//função principal
export default function BotaoAdd3(props) {
  return (
    <View>
      <TouchableOpacity style={styles.botao} onPress={props.onPress}>
          <Text style={styles.label}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 80,
    borderWidth: 1,
    backgroundColor: '#CD9B1D',
    borderRadius: 4,
    borderColor: '#d6d6d6',
    fontWeight: 'bold'
  },
  label: {
    padding: 4,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});
