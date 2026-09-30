
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

import { useApp } from "../context/AppContext";

export default function SettingsScreen() {
  const { darkMode, setDarkMode, animations, setAnimations } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <Text style={styles.subtitle}>Personaliza tu experiencia en Arcana.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apariencia</Text>

        <Row
          icon="🌙"
          title="Modo oscuro"
          description="Utilizar el tema oscuro de Arcana."
          value={darkMode}
          onChange={setDarkMode}
        />

        <Row
          icon="✨"
          title="Animaciones"
          description="Mostrar animaciones en las cartas."
          value={animations}
          onChange={setAnimations}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información</Text>

        <TouchableOpacity style={styles.info}>
          <Text style={styles.infoIcon}>🔮</Text>

          <View>
            <Text style={styles.infoTitle}>Arcana</Text>

            <Text style={styles.infoText}>Tarot & reflexión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Row({ icon, title, description, value, onChange }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowIcon}>{icon}</Text>

      <View style={{ flex: 1 }}>
        <Text style={styles.rowTitle}>{title}</Text>

        <Text style={styles.rowDescription}>{description}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: "#45344F",
          true: "#76509D",
        }}
        thumbColor={value ? "#C084FC" : "#AFA2B8"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
  },

  subtitle: {
    color: "#AFA2B8",
    marginTop: 7,
  },

  section: {
    marginTop: 30,
    backgroundColor: "#21172D",
    borderRadius: 22,
    padding: 18,
  },

  sectionTitle: {
    color: "#C084FC",
    fontWeight: "900",
    fontSize: 17,
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#34233F",
  },

  rowIcon: {
    fontSize: 25,
    marginRight: 13,
  },

  rowTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },

  rowDescription: {
    color: "#AFA2B8",
    fontSize: 12,
    marginTop: 4,
    paddingRight: 10,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },

  infoIcon: {
    fontSize: 30,
    marginRight: 13,
  },

  infoTitle: {
    color: "#fff",
    fontWeight: "900",
  },

  infoText: {
    color: "#AFA2B8",
    marginTop: 3,
  },
});
