import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const cartasIniciales = [
  '🍎',
  '🍎',
  '🍌',
  '🍌',
  '🍓',
  '🍓',
  '🍉',
  '🍉',
];


function mezclarCartas() {

  return [...cartasIniciales]
    .sort(() => Math.random() - 0.5);

}


export default function MemoramaScreen() {

  const [cartas, setCartas] = useState(
    mezclarCartas()
  );

  const [seleccionadas, setSeleccionadas] = useState([]);

  const [encontradas, setEncontradas] = useState([]);


  function seleccionarCarta(index) {

    if (
      seleccionadas.length === 2 ||
      seleccionadas.includes(index) ||
      encontradas.includes(index)
    ) {
      return;
    }


    const nuevas = [
      ...seleccionadas,
      index
    ];

    setSeleccionadas(nuevas);


    if (nuevas.length === 2) {

      const [primera, segunda] = nuevas;


      if (cartas[primera] === cartas[segunda]) {

        setEncontradas([
          ...encontradas,
          primera,
          segunda
        ]);

        setSeleccionadas([]);

      } else {

        setTimeout(() => {
          setSeleccionadas([]);
        }, 800);

      }

    }

  }


  function reiniciar() {

    setCartas(mezclarCartas());
    setSeleccionadas([]);
    setEncontradas([]);

  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        🧠 Memorama
      </Text>


      <View style={styles.tablero}>

        {cartas.map((carta, index) => {

          const mostrar =
            seleccionadas.includes(index) ||
            encontradas.includes(index);


          return (

            <TouchableOpacity
              key={index}
              style={styles.carta}
              onPress={() => seleccionarCarta(index)}
            >

              <Text style={styles.textoCarta}>

                {mostrar ? carta : '❓'}

              </Text>

            </TouchableOpacity>

          );

        })}

      </View>


      {encontradas.length === cartas.length && (

        <Text style={styles.ganaste}>
          🎉 ¡Ganaste!
        </Text>

      )}


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
    marginBottom: 30,
  },

  tablero: {
    width: 330,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },

  carta: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  textoCarta: {
    fontSize: 35,
  },

  ganaste: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },

  button: {
    backgroundColor: '#7C3AED',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

});