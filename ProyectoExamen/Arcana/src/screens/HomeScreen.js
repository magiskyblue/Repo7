import { LinearGradient } from "expo-linear-gradient";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useApp } from "../context/AppContext";

export default function HomeScreen({ navigation }) {
  const { appointments } = useApp();

  const options = [
    {
      icon: "🔮",
      title: "Ritual de la carta",
      description: "Agita tu teléfono y revela una carta.",
      route: "Ritual",
    },
    {
      icon: "🃏",
      title: "78 cartas",
      description: "Explora los Arcanos Mayores y Menores.",
      route: "Tarot",
    },
    {
      icon: "📅",
      title: "Agendar lectura",
      description: "Reserva una lectura de tarot.",
      route: "Agendar",
    },
    {
      icon: "✨",
      title: "Tipos de lectura",
      description: "Conoce las diferentes lecturas.",
      route: "Lecturas",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#24132F", "#110C17"]} style={styles.hero}>
        <Text style={styles.moon}>☾</Text>

        <Text style={styles.brand}>ARCANA</Text>

        <Text style={styles.subtitle}>Tarot · Intuición · Reflexión</Text>

        <Text style={styles.description}>
          Un espacio para explorar el simbolismo de las cartas y conectar con tu
          intuición.
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Explora Arcana</Text>

        <View style={styles.grid}>
          {options.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.option}
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionIcon}>{item.icon}</Text>

              <Text style={styles.optionTitle}>{item.title}</Text>

              <Text style={styles.optionDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.appointmentCard}
          onPress={() => navigation.navigate("Citas")}
        >
          <View>
            <Text style={styles.appointmentTitle}>Mis citas</Text>

            <Text style={styles.appointmentDescription}>
              {appointments.length === 0
                ? "Todavía no tienes citas."
                : `Tienes ${appointments.length} cita(s) programada(s).`}
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.quote}>
          <Text style={styles.quoteMark}>“</Text>

          <Text style={styles.quoteText}>
            Las cartas no deciden tu camino. Solo te ayudan a observarlo desde
            otra perspectiva.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
  },

  hero: {
    paddingTop: 55,
    paddingBottom: 45,
    paddingHorizontal: 25,
    alignItems: "center",
  },

  moon: {
    fontSize: 75,
    color: "#D9B8FF",
  },

  brand: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "900",
    letterSpacing: 7,
    marginTop: 5,
  },

  subtitle: {
    color: "#C084FC",
    marginTop: 10,
    fontSize: 14,
    letterSpacing: 2,
  },

  description: {
    color: "#BFB1C9",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 23,
    fontSize: 15,
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  option: {
    width: "48%",
    backgroundColor: "#21172D",
    borderRadius: 20,
    padding: 17,
    minHeight: 155,
    borderWidth: 1,
    borderColor: "#382747",
  },

  optionIcon: {
    fontSize: 31,
    marginBottom: 10,
  },

  optionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  optionDescription: {
    color: "#AFA2B8",
    marginTop: 7,
    lineHeight: 18,
    fontSize: 12,
  },

  appointmentCard: {
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#2B1A3B",
    borderWidth: 1,
    borderColor: "#684B86",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  appointmentTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
  },

  appointmentDescription: {
    color: "#BFAED0",
    marginTop: 5,
  },

  arrow: {
    color: "#C084FC",
    fontSize: 35,
  },

  quote: {
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#17101F",
  },

  quoteMark: {
    color: "#C084FC",
    fontSize: 40,
  },

  quoteText: {
    color: "#C9BDD3",
    fontSize: 14,
    lineHeight: 22,
    fontStyle: "italic",
  },
});
