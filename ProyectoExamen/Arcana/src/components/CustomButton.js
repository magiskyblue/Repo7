import { LinearGradient } from "expo-linear-gradient";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function CustomButton({
  title,
  onPress,
  icon,
  secondary = false,
  loading = false,
}) {
  if (secondary) {
    return (
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#D9B8FF" />
        ) : (
          <>
            {icon && <Text style={styles.icon}>{icon}</Text>}
            <Text style={styles.secondaryText}>{title}</Text>
          </>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={["#8E5BEF", "#C084FC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            {icon && <Text style={styles.icon}>{icon}</Text>}
            <Text style={styles.text}>{title}</Text>
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    elevation: 5,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  icon: {
    fontSize: 20,
    marginRight: 9,
  },

  secondaryButton: {
    minHeight: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#76509D",
    backgroundColor: "#21172D",
  },

  secondaryText: {
    color: "#D9B8FF",
    fontSize: 16,
    fontWeight: "700",
  },
});
