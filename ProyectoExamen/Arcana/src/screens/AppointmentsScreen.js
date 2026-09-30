import { useState } from "react";

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import ConfirmModal from "../components/ConfirmModal";
import { useApp } from "../context/AppContext";

export default function AppointmentsScreen() {
  const { appointments, removeAppointment } = useApp();

  const [selected, setSelected] = useState(null);

  const cancelAppointment = () => {
    removeAppointment(selected);
    setSelected(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mis citas</Text>

      <Text style={styles.subtitle}>
        Aquí aparecerán las lecturas que hayas agendado.
      </Text>

      {appointments.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🌙</Text>

          <Text style={styles.emptyTitle}>No tienes citas</Text>

          <Text style={styles.emptyText}>
            Cuando agendes una lectura aparecerá aquí.
          </Text>
        </View>
      ) : (
        appointments.map((appointment) => (
          <View style={styles.card} key={appointment.id}>
            <View style={styles.cardHeader}>
              <Text style={styles.icon}>🔮</Text>

              <View style={{ flex: 1 }}>
                <Text style={styles.type}>{appointment.type}</Text>

                <Text style={styles.name}>{appointment.name}</Text>
              </View>
            </View>

            <View style={styles.info}>
              <Text style={styles.infoText}>📅 {appointment.date}</Text>

              <Text style={styles.infoText}>🕐 {appointment.time}</Text>
            </View>

            {appointment.question && (
              <Text style={styles.question}>“{appointment.question}”</Text>
            )}

            <TouchableOpacity
              style={styles.cancel}
              onPress={() => setSelected(appointment.id)}
            >
              <Text style={styles.cancelText}>Cancelar cita</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      <ConfirmModal
        visible={!!selected}
        title="Cancelar cita"
        message="¿Seguro que deseas cancelar esta cita?"
        onCancel={() => setSelected(null)}
        onConfirm={cancelAppointment}
        confirmText="Cancelar cita"
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
    marginTop: 7,
    marginBottom: 20,
  },

  empty: {
    backgroundColor: "#21172D",
    padding: 30,
    borderRadius: 22,
    alignItems: "center",
    marginTop: 20,
  },

  emptyIcon: {
    fontSize: 55,
  },

  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 12,
  },

  emptyText: {
    color: "#AFA2B8",
    textAlign: "center",
    marginTop: 7,
    lineHeight: 20,
  },

  card: {
    backgroundColor: "#21172D",
    borderRadius: 22,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#4B3560",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 35,
    marginRight: 13,
  },

  type: {
    color: "#C084FC",
    fontSize: 17,
    fontWeight: "900",
  },

  name: {
    color: "#fff",
    marginTop: 3,
  },

  info: {
    marginTop: 15,
    gap: 7,
  },

  infoText: {
    color: "#C9BDD3",
  },

  question: {
    color: "#AFA2B8",
    fontStyle: "italic",
    marginTop: 15,
    lineHeight: 20,
  },

  cancel: {
    marginTop: 15,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#34213F",
    alignItems: "center",
  },

  cancelText: {
    color: "#E5A6A6",
    fontWeight: "800",
  },
});
