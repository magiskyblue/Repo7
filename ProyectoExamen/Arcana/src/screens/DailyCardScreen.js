import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import TarotCard from "../components/TarotCard";
import { tarotCards } from "../data/tarot";

export default function DailyCardScreen() {
  const [card, setCard] = useState(null);

  const drawCard = () => {
    const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];

    setCard(random);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🌙</Text>

      <Text style={styles.title}>Carta del día</Text>

      <Text style={styles.subtitle}>
        Una carta para reflexionar durante tu día.
      </Text>

      <View style={styles.card}>
        <TarotCard card={card || tarotCards[0]} revealed={!!card} />
      </View>

      {card && (
        <>
          <Text style={styles.name}>{card.nombre}</Text>

          <Text style={styles.meaning}>{card.consejo}</Text>
        </>
      )}

      <View style={styles.button}>
        <CustomButton
          title={card ? "Sacar otra carta" : "Sacar carta"}
          icon="✨"
          onPress={drawCard}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
    alignItems: "center",
    padding: 20,
  },

  icon: {
    fontSize: 45,
    marginTop: 15,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 5,
  },

  subtitle: {
    color: "#AFA2B8",
    textAlign: "center",
    marginTop: 8,
  },

  card: {
    marginTop: 25,
  },

  name: {
    color: "#C084FC",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 18,
  },

  meaning: {
    color: "#C9BDD3",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 21,
  },

  button: {
    width: "100%",
    marginTop: 25,
  },
});
