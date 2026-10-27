import React from 'react';
import { View, Text } from 'react-native';

export default function ResultadoIMC({ imc, clasificacion }: any) {

  return (
    <View style={{ marginTop: 20 }}>

      <Text>Resultado del IMC</Text>

      <Text>IMC: {imc.toFixed(2)}</Text>

      <Text>Clasificacion: {clasificacion}</Text>

    </View>
  );
}