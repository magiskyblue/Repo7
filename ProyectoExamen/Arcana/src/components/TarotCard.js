import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function TarotCard({ card, revealed = true, small = false }) {
  if (!revealed) {
    return (
      <View style={[styles.card, small && styles.smallCard]}>
        <LinearGradient
          colors={["#171022", "#302044", "#171022"]}
          style={styles.back}
        >
          <View style={styles.moon}>
            <Text style={styles.moonText}>☾</Text>
          </View>

          <Text style={styles.backTitle}>ARCANA</Text>

          <View style={styles.symbolGrid}>
            <Text>✦</Text>
            <Text>☽</Text>
            <Text>✦</Text>
            <Text>♢</Text>
            <Text>✦</Text>
            <Text>☽</Text>
            <Text>✦</Text>
            <Text>♢</Text>
            <Text>✦</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={[styles.card, small && styles.smallCard]}>
      <LinearGradient
        colors={["#251832", "#4A2A65", "#201329"]}
        style={styles.front}
      >
        <Text style={styles.number}>{card.numero}</Text>

        <Text style={styles.symbol}>{card.simbolo}</Text>

        <Text style={styles.name}>{card.nombre}</Text>

        <View style={styles.line} />

        <Text style={styles.type}>{card.tipo}</Text>

        {card.palo && (
          <Text style={styles.suit}>
            {card.simbolo} {card.palo}
          </Text>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 210,
    height: 330,
    borderRadius: 22,
    overflow: "hidden",
    elevation: 12,
    shadowOpacity: 0.35,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
  },

  smallCard: {
    width: 145,
    height: 225,
  },

  front: {
    flex: 1,
    alignItems: "center",
    padding: 18,
    borderWidth: 2,
    borderColor: "#A678D4",
    borderRadius: 22,
  },

  back: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#A678D4",
    borderRadius: 22,
    padding: 15,
  },

  number: {
    color: "#D9B8FF",
    fontSize: 16,
    fontWeight: "800",
    alignSelf: "flex-start",
  },

  symbol: {
    fontSize: 64,
    marginTop: 25,
    marginBottom: 25,
  },

  name: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "900",
  },

  line: {
    height: 1,
    width: "65%",
    backgroundColor: "#C084FC",
    marginVertical: 14,
  },

  type: {
    color: "#D8C5E8",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  suit: {
    color: "#D9B8FF",
    marginTop: 12,
    fontWeight: "700",
  },

  moon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#C084FC",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  moonText: {
    color: "#D9B8FF",
    fontSize: 50,
  },

  backTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 5,
  },

  symbolGrid: {
    marginTop: 25,
    width: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },

  symbolGridText: {
    color: "#C084FC",
  },
});
