import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function CalculoImc() {
  // "váriaveis para calcular o IMC" - State/Hooks
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  // função para calcular o imc
  function calcularImc() {
    if (peso == 0) {
      Alert.alert('Atenção', 'Você deve informar um valor acima de 0.');
      return;
    }

    if (altura == 0) {
      Alert.alert('Atenção', 'Você deve informar um valor acima de 0.');
      return;
    }

    setImc(peso / (altura * altura));
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric" // so aceita tipo numerico
        style={styles.input}
        placeholder="Insira o peso em kg"
        value={peso == 0 ? null : peso}
        onChangeText={(peso) => setPeso(peso)}
      />

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Insira a altura em cm"
        value={altura == 0 ? null : altura}
        onChangeText={(altura) => setAltura(altura)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => calcularImc()}>
        <Text style={styles.label}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Seu IMC é: {imc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 20,
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 10,
    padding: 4,
    backgroundColor: '#5C73F2',
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
