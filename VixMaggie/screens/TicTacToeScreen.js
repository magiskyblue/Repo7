import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const combinaciones = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],

];


function comprobarGanador(tablero) {

  for (const combinacion of combinaciones) {

    const [a, b, c] = combinacion;

    if (
      tablero[a] &&
      tablero[a] === tablero[b] &&
      tablero[a] === tablero[c]
    ) {

      return tablero[a];

    }

  }

  return null;

}


export default function TicTacToeScreen() {

  const [tablero, setTablero] =
    useState(Array(9).fill(null));

  const [turno, setTurno] =
    useState('X');


  const ganador =
    comprobarGanador(tablero);


  function jugar(index) {

    if (
      tablero[index] ||
      ganador
    ) {
      return;
    }


    const nuevoTablero =
      [...tablero];

    nuevoTablero[index] = turno;

    setTablero(nuevoTablero);


    setTurno(
      turno === 'X'
        ? 'O'
        : 'X'
    );

  }


  function reiniciar() {

    setTablero(
      Array(9).fill(null)
    );

    setTurno('X');

  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        ❌⭕ Tic Tac Toe
      </Text>


      <Text style={styles.turno}>

        {ganador
          ? `🎉 Ganó ${ganador}`
          : `Turno: ${turno}`
        }

      </Text>


      <View style={styles.tablero}>

        {tablero.map((valor, index) => (

          <TouchableOpacity
            key={index}
            style={styles.casilla}
            onPress={() => jugar(index)}
          >

            <Text style={styles.valor}>
              {valor}
            </Text>

          </TouchableOpacity>

        ))}

      </View>


      <TouchableOpacity
        style={styles.button}
        onPress={reiniciar}
      >

        <Text style={styles.buttonText}>
          🔄 Reiniciar
        </Text>

      </TouchableOpacity>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    alignItems: 'center',
    paddingTop: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7C3AED',
  },

  turno: {
    fontSize: 20,
    marginVertical: 25,
    fontWeight: 'bold',
  },

  tablero: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  casilla: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  valor: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#7C3AED',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

});