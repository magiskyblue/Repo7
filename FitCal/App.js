import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a) {
      setResultado('Escribe tu peso y tu altura');
      return;
    }

    const imc = p / (a * a);

    if (imc < 18.5) {
      setResultado('Tu IMC es ' + imc.toFixed(1) + ' - Bajo peso');
    } else if (imc < 25) {
      setResultado('Tu IMC es ' + imc.toFixed(1) + ' - Peso normal');
    } else if (imc < 30) {
      setResultado('Tu IMC es ' + imc.toFixed(1) + ' - Sobrepeso');
    } else {
      setResultado('Tu IMC es ' + imc.toFixed(1) + ' - Obesidad');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <Text style={styles.label}>Peso en kg:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 70"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={styles.label}>Altura en metros:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 1.75"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Pressable style={styles.boton} onPress={calcularIMC}>
        <Text style={styles.textoBoton}>Calcular IMC</Text>
      </Pressable>

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f2f2f2',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#2878e8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  resultado: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold',
  },
});
