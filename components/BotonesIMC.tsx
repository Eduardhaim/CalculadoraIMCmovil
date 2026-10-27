import React from 'react';
import { View, Text, Button } from 'react-native';

export default function BotonesIMC({ peso, altura, setPeso, setAltura }: any) {

  return (
    <View>

      <Text>Peso: {peso} kg</Text>

      <Button
        title="Aumentar 1 KG"
        onPress={() => setPeso(peso + 1)}
      />

      <Button
        title="Disminuir 1 KG"
        onPress={() => {
          if (peso > 1) {
            setPeso(peso - 1);
          }
        }}
      />

      <Text>Altura: {altura.toFixed(2)} metros</Text>

      <Button
        title="Aumentar 1 CM"
        onPress={() => setAltura(Number((altura + 0.01).toFixed(2)))}
      />

      <Button
        title="Disminuir 1 CM"
        onPress={() => {
          if (altura > 0.01) {
            setAltura(Number((altura - 0.01).toFixed(2)));
          }
        }}
      />

    </View>
  );
}