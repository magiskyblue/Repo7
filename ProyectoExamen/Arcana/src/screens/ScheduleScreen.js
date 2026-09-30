import { useState } from "react";

import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import ConfirmModal from "../components/ConfirmModal";
import CustomButton from "../components/CustomButton";
import { useApp } from "../context/AppContext";

const types = [
  "Una carta",
  "Tres cartas",
  "Lectura de amor",
  "Lectura laboral",
];

export default function ScheduleScreen({ route, navigation }) {
  const { addAppointment } = useApp();

  const initialType = route.params?.readingType || "";

  const [type, setType] = useState(initialType);

  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const [date, setDate] = useState(new Date());

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [modal, setModal] = useState(false);

  const changeDate = (event, selectedDate) => {
    setShowDate(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const changeTime = (event, selectedTime) => {
    setShowTime(false);

    if (selectedTime) {
      setDate(selectedTime);
    }
  };

  const submit = () => {
    if (!type || !name.trim()) {
      alert("Selecciona un tipo de lectura y escribe tu nombre.");
      return;
    }

    setModal(true);
  };

  const confirm = () => {
    addAppointment({
      type,
      name,
      question,
      date: date.toLocaleDateString("es-MX"),
      time: date.toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setModal(false);

    navigation.navigate("Citas");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Agendar lectura</Text>

      <Text style={styles.subtitle}>Completa los datos de tu consulta.</Text>

      <Text style={styles.label}>Tipo de lectura</Text>

      <View style={styles.types}>
        {types.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.type, type === item && styles.typeActive]}
            onPress={() => setType(item)}
          >
            <Text
              style={[styles.typeText, type === item && styles.typeTextActive]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Tu nombre</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#80738B"
        style={styles.input}
      />

      <Text style={styles.label}>Fecha</Text>

      <TouchableOpacity
        style={styles.selector}
        onPress={() => setShowDate(true)}
      >
        <Text style={styles.selectorIcon}>📅</Text>

        <Text style={styles.selectorText}>
          {date.toLocaleDateString("es-MX")}
        </Text>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={changeDate}
        />
      )}

      <Text style={styles.label}>Hora</Text>

      <TouchableOpacity
        style={styles.selector}
        onPress={() => setShowTime(true)}
      >
        <Text style={styles.selectorIcon}>🕐</Text>

        <Text style={styles.selectorText}>
          {date.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </TouchableOpacity>

      {showTime && (
        <DateTimePicker
          value={date}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={changeTime}
        />
      )}

      <Text style={styles.label}>Pregunta o intención</Text>

      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="¿Sobre qué quieres reflexionar?"
        placeholderTextColor="#80738B"
        style={[styles.input, styles.textarea]}
        multiline
      />

      <View style={styles.button}>
        <CustomButton title="Confirmar cita" icon="✨" onPress={submit} />
      </View>

      <ConfirmModal
        visible={modal}
        title="Confirmar cita"
        message={`Lectura: ${type}\nFecha: ${date.toLocaleDateString(
          "es-MX",
        )}\nHora: ${date.toLocaleTimeString("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
        })}`}
        onCancel={() => setModal(false)}
        onConfirm={confirm}
        confirmText="Agendar"
      />
    </ScrollView>
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
    marginTop: 6,
    marginBottom: 10,
  },

  label: {
    color: "#C084FC",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 9,
  },

  types: {
    gap: 9,
  },

  type: {
    backgroundColor: "#21172D",
    borderWidth: 1,
    borderColor: "#382747",
    padding: 14,
    borderRadius: 15,
  },

  typeActive: {
    backgroundColor: "#6D3F9D",
    borderColor: "#C084FC",
  },

  typeText: {
    color: "#B9ACBF",
    fontWeight: "700",
  },

  typeTextActive: {
    color: "#fff",
  },

  input: {
    backgroundColor: "#21172D",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#382747",
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 14,
  },

  selector: {
    backgroundColor: "#21172D",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#382747",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  selectorIcon: {
    fontSize: 22,
    marginRight: 12,
  },

  selectorText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  textarea: {
    height: 110,
    textAlignVertical: "top",
  },

  button: {
    marginTop: 25,
    marginBottom: 40,
  },
});
