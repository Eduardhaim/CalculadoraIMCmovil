import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import BotonesIMC from './components/BotonesIMC';
import ResultadoIMC from './components/ResultadoIMC';

export default function App() {

  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(1.70);
  const [imc, setImc] = useState(0);
  const [clasificacion, setClasificacion] = useState('');

  useEffect(() => {

    let resultado = peso / (altura * altura);

    setImc(resultado);

    if (resultado < 18.5) {
      setClasificacion('Bajo peso');
    } else if (resultado < 25) {
      setClasificacion('Peso normal');
    } else if (resultado < 30) {
      setClasificacion('Sobrepeso');
    } else {
      setClasificacion('Obesidad');
    }

  }, [peso, altura]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

      <Text>Calculadora de IMC</Text>

      <BotonesIMC
        peso={peso}
        altura={altura}
        setPeso={setPeso}
        setAltura={setAltura}
      />

      <ResultadoIMC
        imc={imc}
        clasificacion={clasificacion}
      />

    </View>
  );
}