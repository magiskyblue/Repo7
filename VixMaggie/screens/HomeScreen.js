import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>
        🚀
      </Text>

      <Text style={styles.title}>
        VixMaggie
      </Text>

      <Text style={styles.subtitle}>
        ¡Bienvenido a mi aplicación!
      </Text>


      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          ¿Qué puedes hacer?
        </Text>

        <Text style={styles.item}>
          🎲 Lanzar dados
        </Text>

        <Text style={styles.item}>
          🧠 Jugar memorama
        </Text>

        <Text style={styles.item}>
          ❌⭕ Jugar Tic Tac Toe
        </Text>

        <Text style={styles.item}>
          💱 Convertir divisas
        </Text>

      </View>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >

        <Text style={styles.buttonText}>
          ☰ Abrir menú
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

  logo: {
    fontSize: 70,
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#7C3AED',
  },

  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 25,
  },

  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 25,
    borderRadius: 20,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    fontSize: 17,
    marginVertical: 7,
  },

  button: {
    backgroundColor: '#7C3AED',
    padding: 15,
    borderRadius: 12,
    marginTop: 25,
    width: '80%',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

});