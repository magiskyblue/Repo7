import { useState } from "react";
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import TarotCard from "../components/TarotCard";
import { tarotCards } from "../data/tarot";

export default function TarotScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [selectedCard, setSelectedCard] = useState(null);

  const filters = ["Todos", "Mayores", "Bastos", "Copas", "Espadas", "Oros"];

  const filteredCards = tarotCards.filter((card) => {
    const matchesSearch = card.nombre
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchesFilter = true;

    if (filter === "Mayores") {
      matchesFilter = card.tipo === "Arcano Mayor";
    } else if (filter !== "Todos") {
      matchesFilter = card.palo === filter;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Las 78 cartas</Text>

        <Text style={styles.subtitle}>
          Explora el significado de cada carta
        </Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar carta..."
          placeholderTextColor="#8E8297"
          style={styles.search}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filters}
        >
          {filters.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.filter, filter === item && styles.filterActive]}
              onPress={() => setFilter(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === item && styles.filterTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {filteredCards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={styles.cardContainer}
            onPress={() => setSelectedCard(card)}
            activeOpacity={0.8}
          >
            <TarotCard card={card} small />

            <Text style={styles.cardName}>{card.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        visible={!!selectedCard}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedCard(null)}
      >
        {selectedCard && (
          <View style={styles.modalOverlay}>
            <View style={styles.modal}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => setSelectedCard(null)}
                >
                  <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>

                <View style={styles.center}>
                  <TarotCard card={selectedCard} small />

                  <Text style={styles.modalTitle}>{selectedCard.nombre}</Text>

                  <Text style={styles.modalType}>{selectedCard.tipo}</Text>
                </View>

                <Text style={styles.label}>Palabras clave</Text>

                <View style={styles.keywords}>
                  {selectedCard.palabrasClave.map((keyword) => (
                    <View style={styles.keyword} key={keyword}>
                      <Text style={styles.keywordText}>{keyword}</Text>
                    </View>
                  ))}
                </View>

                <Text style={styles.label}>Significado</Text>

                <Text style={styles.body}>{selectedCard.significado}</Text>

                <Text style={styles.label}>Invertida</Text>

                <Text style={styles.body}>{selectedCard.invertida}</Text>

                <Text style={styles.label}>Amor</Text>

                <Text style={styles.body}>{selectedCard.amor}</Text>

                <Text style={styles.label}>Trabajo</Text>

                <Text style={styles.body}>{selectedCard.trabajo}</Text>

                <Text style={styles.label}>Consejo</Text>

                <Text style={styles.body}>{selectedCard.consejo}</Text>
              </ScrollView>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
  },

  header: {
    padding: 20,
    paddingBottom: 5,
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "900",
  },

  subtitle: {
    color: "#AFA2B8",
    marginTop: 5,
  },

  search: {
    backgroundColor: "#21172D",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 13,
    color: "#fff",
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#382747",
  },

  filters: {
    marginTop: 13,
  },

  filter: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#21172D",
    marginRight: 8,
  },

  filterActive: {
    backgroundColor: "#8E5BEF",
  },

  filterText: {
    color: "#AFA2B8",
    fontWeight: "700",
  },

  filterTextActive: {
    color: "#fff",
  },

  grid: {
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardContainer: {
    width: "48%",
    alignItems: "center",
    marginBottom: 20,
  },

  cardName: {
    color: "#E7DAEF",
    fontWeight: "700",
    textAlign: "center",
    marginTop: 8,
    fontSize: 13,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.75)",
  },

  modal: {
    maxHeight: "92%",
    backgroundColor: "#17101F",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#76509D",
  },

  close: {
    alignSelf: "flex-end",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2B1A3B",
    alignItems: "center",
    justifyContent: "center",
  },

  closeText: {
    color: "#fff",
    fontSize: 28,
  },

  center: {
    alignItems: "center",
  },

  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 15,
    textAlign: "center",
  },

  modalType: {
    color: "#C084FC",
    marginTop: 5,
  },

  label: {
    color: "#C084FC",
    fontWeight: "900",
    fontSize: 16,
    marginTop: 22,
    marginBottom: 8,
  },

  body: {
    color: "#C9BDD3",
    fontSize: 14,
    lineHeight: 22,
  },

  keywords: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  keyword: {
    backgroundColor: "#2B1A3B",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 15,
  },

  keywordText: {
    color: "#D9B8FF",
    fontSize: 12,
    fontWeight: "700",
  },
});
