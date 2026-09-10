import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default function DadosScreen() {

  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);


  function lanzarDados() {

    const nuevoDado1 =
      Math.floor(Math.random() * 6) + 1;

    const nuevoDado2 =
      Math.floor(Math.random() * 6) + 1;

    setDado1(nuevoDado1);
    setDado2(nuevoDado2);
  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        🎲 Lanzar Dados
      </Text>

      <View style={styles.dados}>

        <View style={styles.dado}>
          <Text style={styles.numero}>
            {dado1}
          </Text>
        </View>

        <View style={styles.dado}>
          <Text style={styles.numero}>
            {dado2}
          </Text>
        </View>

      </View>


      <Text style={styles.resultado}>
        Resultado: {dado1 + dado2}
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={lanzarDados}
      >

        <Text style={styles.buttonText}>
          🎲 LANZAR
        </Text>

      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7C3AED',
    marginBottom: 40,
  },

  dados: {
    flexDirection: 'row',
    gap: 20,
  },

  dado: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  numero: {
    fontSize: 60,
    fontWeight: 'bold',
  },

  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },

  button: {
    backgroundColor: '#7C3AED',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});