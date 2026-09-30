import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ConfirmModal({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancel} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.65)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#37264F",
    marginBottom: 10,
  },
  message: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  cancel: {
    flex: 1,
    padding: 13,
    borderRadius: 12,
    backgroundColor: "#EEE",
    alignItems: "center",
  },
  confirm: {
    flex: 1,
    padding: 13,
    borderRadius: 12,
    backgroundColor: "#6C4AB6",
    alignItems: "center",
  },
  cancelText: {
    color: "#555",
    fontWeight: "bold",
  },
  confirmText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
