import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Magnetometer } from "expo-sensors";

export default function MagnetometerSensor() {
  const [datos, setDatos] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [direccion, setDireccion] = useState(0);

  useEffect(() => {
    const subscribir = Magnetometer.addListener((measurement) => {
      setDatos(measurement);

      let angulo = Math.atan2(measurement.y, measurement.x);
      angulo = (angulo * 180) / Math.PI;

      if (angulo < 0) {
        angulo += 360;
      }

      setDireccion(angulo);
    });

    Magnetometer.setUpdateInterval(100);

    return () => {
      subscribir.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brújula</Text>

      <View style={styles.brujula}>
        <Text style={styles.norte}>N</Text>
        <Text style={styles.este}>E</Text>
        <Text style={styles.sur}>S</Text>
        <Text style={styles.oeste}>O</Text>

        <View
          style={[
            styles.aguja,
            {
              transform: [{ rotate: `${direccion}deg` }],
            },
          ]}
        >
          <View style={styles.punta} />
        </View>
      </View>

      <Text style={styles.grados}>
        {direccion.toFixed(0)}°
      </Text>

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

  brujula: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#3a4a5a",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },

  norte: {
    position: "absolute",
    top: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },

  este: {
    position: "absolute",
    right: 15,
    fontSize: 24,
    fontWeight: "bold",
  },

  sur: {
    position: "absolute",
    bottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },

  oeste: {
    position: "absolute",
    left: 15,
    fontSize: 24,
    fontWeight: "bold",
  },

  aguja: {
    width: 8,
    height: 100,
    backgroundColor: "#333",
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  punta: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    marginTop: -5,
  },

  grados: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
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
