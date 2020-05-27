import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculo de IMC</Text>
      <Text style={styles.text}>
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
        Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </Text>

      <Text style={styles.titulo}>Índice Cintura-Quadril - ICQ</Text>
      <Text style={styles.text}>
        O excesso de gordura corporal em seus diversos níveis representa
        diferentes graus de fatores de risco para a saúde. Diversos estudos tem
        demonstrado a relação direta entre doenças importantes e a medida da
        circunferência abdominal. Os índices de 0.95 ou menos, para homens e,
        0.80 ou menos para mulheres são considerados seguros.
      </Text>

      <Text style={styles.titulo}>Peso Ideal</Text>
      <Text style={styles.text}>
        Manter o peso ideal é importante para evitar complicações como
        obesidade, hipertensão e diabetes ou até mesmo a desnutrição, quando a
        pessoa está muito abaixo do peso.
      </Text>
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
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#CFCFCF',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    padding: 16,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Times New Roma',
  },
});
