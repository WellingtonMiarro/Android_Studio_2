import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function PesoIdeal() {
  const [altura, setAltura] = useState(0);
  const [pesoIdeal, setPesoIdeal] = useState(0);

  const [sexo, setSexo] = useState('');
  // "váriaveis para calcular o IMC" - State/Hooks

  function calcularPesoIdeal() {
    if (sexo == 'm') {
      if (altura == 0) {
        Alert.alert('Atenção', 'Você deve informar um valor acima de 0.');
        return;
      }
      setPesoIdeal(altura - 100 - (altura - 150) / 4);
    }

    if (sexo == 'f') {
      if (altura == 0) {
        Alert.alert('Atenção', 'Você deve informar um valor acima de 0.');
        return;
      }
      setPesoIdeal(altura - 100 - (altura - 150) / 2);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.selecione}>Selecione o Sexo</Text>

      <Picker
        onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Feminino" value="f" />
        <Picker.Item label="Masculino" value="m" />
      </Picker>

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Insira a altura em cm"
        value={altura == 0 ? null : altura}
        onChangeText={(altura) => setAltura(altura)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => calcularPesoIdeal()}>
        <Text style={styles.label}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.text}> Seu Peso Ideal é: {pesoIdeal}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
  text: {
    marginTop: 10,
    padding: 4,
    fontFamily: 'Time New Roma',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    height: 40,
    padding: 5,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#d6d6d6',
  },
  selecione: {
    padding: 4,
    fontFamily: 'Time New Roma',
    fontSize: 20,
    backgroundColor: '#82D9D9',
    width: '100%',
    textAlign: 'center',
  },
});
