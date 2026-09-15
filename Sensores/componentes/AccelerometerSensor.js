import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Accelerometer } from "expo-sensors";

export default function AccelerometerSensor() {
  const [datos, setDatos] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);
  const [resultado, setResultado] = useState(2);
  const [lanzando, setLanzando] = useState(false);

  useEffect(() => {
    const subscribir = Accelerometer.addListener((measurement) => {
      setDatos(measurement);

      const fuerza = Math.sqrt(
        measurement.x ** 2 +
        measurement.y ** 2 +
        measurement.z ** 2
      );

      if (fuerza > 2 && !lanzando) {
        lanzarDados();
      }
    });

    Accelerometer.setUpdateInterval(100);

    return () => {
      subscribir.remove();
    };
  }, [lanzando]);

  const lanzarDados = () => {
    setLanzando(true);
    setResultado(null);

    let contador = 0;

    const animacion = setInterval(() => {
      const nuevoDado1 = Math.floor(Math.random() * 6) + 1;
      const nuevoDado2 = Math.floor(Math.random() * 6) + 1;

      setDado1(nuevoDado1);
      setDado2(nuevoDado2);

      contador++;

      if (contador >= 10) {
        clearInterval(animacion);

        setResultado(nuevoDado1 + nuevoDado2);
        setLanzando(false);
      }
    }, 100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lanza los dados</Text>

      <View style={styles.dados}>
        <View style={styles.dado}>
          <Text style={styles.numero}>{dado1}</Text>
        </View>

        <View style={styles.dado}>
          <Text style={styles.numero}>{dado2}</Text>
        </View>
      </View>

      {lanzando ? (
        <Text style={styles.mensaje}>🎲 Lanzando...</Text>
      ) : (
        <Text style={styles.resultado}>
          Resultado: {resultado}
        </Text>
      )}

      <Text style={styles.instruccion}>
        Agita el teléfono para lanzar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#efefef",
  },

  title: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 35,
    color: "#3a4a5a",
  },

  dados: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30,
  },

  dado: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  numero: {
    fontSize: 50,
    fontWeight: "bold",
  },

  resultado: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  mensaje: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  instruccion: {
    fontSize: 18,
  },
});