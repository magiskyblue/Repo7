
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.moon}>☾</Text>

        <Text style={styles.brand}>ARCANA</Text>

        <Text style={styles.subtitle}>Tarot · Intuición · Reflexión</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Acerca del proyecto</Text>

        <Text style={styles.text}>
          Arcana es una aplicación móvil educativa desarrollada para demostrar
          diferentes componentes y funcionalidades de React Native.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tecnologías utilizadas</Text>

        <Tech text="React Native" />
        <Tech text="Expo" />
        <Tech text="React Navigation" />
        <Tech text="Accelerometer" />
        <Tech text="Animated API" />
        <Tech text="Linear Gradient" />
        <Tech text="Modales" />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Navegación</Text>

        <Text style={styles.text}>
          • Stack Navigation{"\n"}• Bottom Tab Navigation{"\n"}• Drawer
          Navigation{"\n"}• Navegación entre pantallas{"\n"}• Pantallas modales
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Sensor</Text>

        <Text style={styles.text}>
          El apartado Ritual utiliza el acelerómetro del dispositivo para
          detectar cuando el usuario agita el teléfono. Después de tres
          movimientos, la aplicación selecciona y revela una carta.
        </Text>
      </View>

      <Text style={styles.footer}>Proyecto académico · Arcana</Text>
    </ScrollView>
  );
}

function Tech({ text }) {
  return (
    <View style={styles.tech}>
      <Text style={styles.check}>✓</Text>

      <Text style={styles.techText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
    padding: 20,
  },

  logo: {
    alignItems: "center",
    paddingVertical: 30,
  },

  moon: {
    color: "#C084FC",
    fontSize: 65,
  },

  brand: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 7,
  },

  subtitle: {
    color: "#C084FC",
    marginTop: 8,
    letterSpacing: 1,
  },

  card: {
    backgroundColor: "#21172D",
    padding: 20,
    borderRadius: 22,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#382747",
  },

  title: {
    color: "#C084FC",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12,
  },

  text: {
    color: "#C9BDD3",
    lineHeight: 22,
    fontSize: 14,
  },

  tech: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },

  check: {
    color: "#C084FC",
    fontSize: 17,
    marginRight: 10,
    fontWeight: "900",
  },

  techText: {
    color: "#E8DDF0",
    fontWeight: "600",
  },

  footer: {
    color: "#665770",
    textAlign: "center",
    marginVertical: 25,
  },
});
