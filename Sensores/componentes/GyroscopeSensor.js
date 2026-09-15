import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gyroscope } from "expo-sensors";

export default function GyroscopeSensor() {
  const [datos, setDatos] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [posicion, setPosicion] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const subscribir = Gyroscope.addListener((measurement) => {
      setDatos(measurement);

      setPosicion((actual) => ({
        x: actual.x + measurement.y * 5,
        y: actual.y + measurement.x * 5,
      }));
    });

    Gyroscope.setUpdateInterval(100);

    return () => {
      subscribir.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giroscopio</Text>

      <View style={styles.area}>
        <View
          style={[
            styles.bolita,
            {
              transform: [
                { translateX: posicion.x },
                { translateY: posicion.y },
              ],
            },
          ]}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.axis}>X</Text>
        <Text style={styles.value}>{datos.x.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.axis}>Y</Text>
        <Text style={styles.value}>{datos.y.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.axis}>Z</Text>
        <Text style={styles.value}>{datos.z.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#efefef",
  },

  title: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 35,
    color: "#3a4a5a",
  },

  area: {
    height: 250,
    backgroundColor: "#ddd",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  bolita: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  axis: {
    fontSize: 24,
    fontWeight: "bold",
  },

  value: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
