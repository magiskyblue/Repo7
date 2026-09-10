import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default function DivisasScreen() {

  const [pesos, setPesos] = useState('');
  const [dolares, setDolares] = useState(null);


  function convertir() {

    const cantidad =
      parseFloat(pesos);


    if (isNaN(cantidad)) {

      setDolares(null);

      return;

    }


    // Tasa fija, SIN API
    const tasa = 18;


    const resultado =
      cantidad / tasa;


    setDolares(
      resultado.toFixed(2)
    );

  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        💱 Conversión de Divisas
      </Text>


      <Text style={styles.label}>
        Pesos mexicanos (MXN)
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Ejemplo: 500"
        keyboardType="numeric"
        value={pesos}
        onChangeText={setPesos}
      />


      <TouchableOpacity
        style={styles.button}
        onPress={convertir}
      >

        <Text style={styles.buttonText}>
          Convertir
        </Text>

      </TouchableOpacity>


      {dolares !== null && (

        <View style={styles.resultado}>

          <Text style={styles.resultadoTexto}>
            ${pesos} MXN
          </Text>

          <Text style={styles.flecha}>
            ↓
          </Text>

          <Text style={styles.dolares}>
            ${dolares} USD
          </Text>

        </View>

      )}


      <Text style={styles.nota}>
        Tasa fija utilizada: $18 MXN = $1 USD
      </Text>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    padding: 25,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7C3AED',
    marginTop: 40,
    marginBottom: 35,
    textAlign: 'center',
  },

  label: {
    fontSize: 17,
    marginBottom: 10,
  },

  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    backgroundColor: '#7C3AED',
    width: '100%',
    padding: 17,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultado: {
    backgroundColor: 'white',
    width: '100%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 30,
    elevation: 5,
  },

  resultadoTexto: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  flecha: {
    fontSize: 30,
    marginVertical: 10,
  },

  dolares: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7C3AED',
  },

  nota: {
    color: '#777',
    marginTop: 20,
    textAlign: 'center',
  },

});