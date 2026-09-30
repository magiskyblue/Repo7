import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarotCard from "../components/TarotCard";

export default function CardDetailScreen({ route }) {
  const { card } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardWrapper}>
        <TarotCard card={card} />
      </View>

      <Text style={styles.title}>{card.nombre}</Text>

      <Text style={styles.type}>{card.tipo}</Text>

      <View style={styles.keywords}>
        {card.palabrasClave.map((item) => (
          <View style={styles.keyword} key={item}>
            <Text style={styles.keywordText}>{item}</Text>
          </View>
        ))}
      </View>

      <Info title="Significado" text={card.significado} />
      <Info title="Invertida" text={card.invertida} />
      <Info title="Amor" text={card.amor} />
      <Info title="Trabajo" text={card.trabajo} />
      <Info title="Consejo" text={card.consejo} />
    </ScrollView>
  );
}

function Info({ title, text }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
    padding: 20,
  },

  cardWrapper: {
    alignItems: "center",
    marginVertical: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
  },

  type: {
    color: "#C084FC",
    textAlign: "center",
    marginTop: 7,
  },

  keywords: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 18,
  },

  keyword: {
    backgroundColor: "#2B1A3B",
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  keywordText: {
    color: "#D9B8FF",
    fontWeight: "700",
  },

  section: {
    marginTop: 25,
    backgroundColor: "#21172D",
    padding: 18,
    borderRadius: 18,
  },

  sectionTitle: {
    color: "#C084FC",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 8,
  },

  text: {
    color: "#C9BDD3",
    lineHeight: 22,
    fontSize: 14,
  },
});
