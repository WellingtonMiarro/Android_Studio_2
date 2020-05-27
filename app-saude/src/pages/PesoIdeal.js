import React, { useState } from 'react';
import { View } from 'react-native';

import CalculoPesoIdeal from '../components/CalculoPesoIdeal'; // virou um componente de calculo
export default function PesoIdeal() {
  return (
    <View>
      <CalculoPesoIdeal />
    </View>
  );
}
