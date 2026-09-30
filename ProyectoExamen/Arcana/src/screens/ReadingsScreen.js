
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const readings = [
  {
    id: 1,
    icon: "✨",
    title: "Una carta",
    subtitle: "Respuesta rápida",
    description: "Una sola carta para reflexionar sobre una pregunta concreta.",
  },
  {
    id: 2,
    icon: "🔮",
    title: "Tres cartas",
    subtitle: "Pasado · Presente · Futuro",
    description:
      "Una lectura general para observar la evolución de una situación.",
  },
  {
    id: 3,
    icon: "❤️",
    title: "Lectura de amor",
    subtitle: "Relaciones y sentimientos",
    description: "Explora simbólicamente la dinámica de una relación.",
  },
  {
    id: 4,
    icon: "💼",
    title: "Lectura laboral",
    subtitle: "Trabajo y proyectos",
    description:
      "Una lectura enfocada en decisiones y proyectos profesionales.",
  },
];

export default function ReadingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tipos de lectura</Text>

        <Text style={styles.subtitle}>
          Elige el tipo de lectura que deseas realizar.
        </Text>
      </View>

      {readings.map((reading) => (
        <TouchableOpacity
          key={reading.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate("Agendar", {
              readingType: reading.title,
            })
          }
          activeOpacity={0.8}
        >
          <Text style={styles.icon}>{reading.icon}</Text>

          <View style={styles.info}>
            <Text style={styles.cardTitle}>{reading.title}</Text>

            <Text style={styles.cardSubtitle}>{reading.subtitle}</Text>

            <Text style={styles.description}>{reading.description}</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
  },

  subtitle: {
    color: "#AFA2B8",
    marginTop: 8,
  },

  card: {
    backgroundColor: "#21172D",
    borderRadius: 22,
    padding: 18,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#382747",
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 38,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },

  cardSubtitle: {
    color: "#C084FC",
    marginTop: 3,
    fontSize: 12,
    fontWeight: "700",
  },

  description: {
    color: "#AFA2B8",
    marginTop: 7,
    lineHeight: 18,
    fontSize: 12,
  },

  arrow: {
    color: "#C084FC",
    fontSize: 32,
  },
});
