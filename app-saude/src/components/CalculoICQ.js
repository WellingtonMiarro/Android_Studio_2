import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function CalculoICQ() {
  // "váriaveis para calcular o IMC" - State/Hooks
  const [cintura, setCintura] = useState(0);
  const [quadril, setQuadril] = useState(0);
  const [icq, setIcq] = useState(0);

  // função para calcular o imc
  function calcularIcq() {
    if (cintura == 0) {
      Alert.alert('Atenção', 'Você deve informar um valor acima de 0.');
      return;
    }

    if (quadril == 0) {
      Alert.alert('Atenção', 'Você deve informar um valor acima de 0.');
      return;
    }

    setIcq(cintura / quadril);
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Insira cintura em cm"
        value={cintura == 0 ? null : cintura}
        onChangeText={(cintura) => setCintura(cintura)}
      />

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Insira quadril em cm"
        value={quadril == 0 ? null : quadril}
        onChangeText={(quadril) => setQuadril(quadril)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => calcularIcq()}>
        <Text style={styles.label}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Seu ICQ é: {icq}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    padding: 5,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#d6d6d6',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 10,
    padding: 4,
    backgroundColor: '#6B4C7F',
    borderRadius: 4,
  },
  label: {
    fontSize: 26,
    color: '#fff',
  },
  text: {
    marginTop: 10,
    padding: 4,
    fontFamily: 'Time New Roma',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 20,
  },
});
