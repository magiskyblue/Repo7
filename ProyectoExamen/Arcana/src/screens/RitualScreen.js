import { useEffect, useRef, useState } from "react";

import { Alert, Animated, StyleSheet, Text, View } from "react-native";

import { Accelerometer } from "expo-sensors";

import CustomButton from "../components/CustomButton";
import TarotCard from "../components/TarotCard";

import { tarotCards } from "../data/tarot";

export default function RitualScreen() {
  const [card, setCard] = useState(null);
  const [shaking, setShaking] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);
  const [sensorActive, setSensorActive] = useState(true);

  const rotation = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const lastShake = useRef(0);

  useEffect(() => {
    let subscription;

    const startSensor = async () => {
      const available = await Accelerometer.isAvailableAsync();

      if (!available) {
        setSensorActive(false);
        return;
      }

      Accelerometer.setUpdateInterval(150);

      subscription = Accelerometer.addListener(({ x, y, z }) => {
        const force = Math.sqrt(x * x + y * y + z * z);

        const now = Date.now();

        if (force > 1.8 && now - lastShake.current > 700) {
          lastShake.current = now;
          registerShake();
        }
      });
    };

    startSensor();

    return () => {
      subscription?.remove();
    };
  }, [shakeCount, card]);

  const registerShake = () => {
    setShaking(true);

    const nextCount = shakeCount + 1;
    setShakeCount(nextCount);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1.08,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(rotation, {
          toValue: -1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(rotation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShaking(false);
    });

    if (nextCount >= 3) {
      setTimeout(() => {
        revealCard();
        setShakeCount(0);
      }, 700);
    }
  };

  const revealCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setCard(tarotCards[randomIndex]);

    Alert.alert("✨ Carta revelada", "Tu carta ha sido seleccionada.");
  };

  const manualReveal = () => {
    setShakeCount(0);
    revealCard();
  };

  const reset = () => {
    setCard(null);
    setShakeCount(0);
  };

  const spin = rotation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.moon}>☾</Text>

      <Text style={styles.title}>Ritual de la Carta</Text>

      <Text style={styles.description}>
        Agita tu teléfono tres veces para mezclar energéticamente la baraja.
      </Text>

      <Animated.View
        style={{
          transform: [{ rotate: spin }, { scale }],
        }}
      >
        <TarotCard card={card || tarotCards[0]} revealed={!!card} />
      </Animated.View>

      <View style={styles.counter}>
        <Text style={styles.counterText}>
          {shaking ? "✨ Barajando..." : `Agitaciones: ${shakeCount}/3`}
        </Text>
      </View>

      {!sensorActive && (
        <Text style={styles.warning}>
          El sensor no está disponible en este dispositivo.
        </Text>
      )}

      {card ? (
        <>
          <Text style={styles.revealedTitle}>{card.nombre}</Text>

          <Text style={styles.revealedMeaning}>{card.significado}</Text>

          <View style={styles.buttons}>
            <CustomButton title="Volver a barajar" icon="🔄" onPress={reset} />
          </View>
        </>
      ) : (
        <View style={styles.buttons}>
          <CustomButton
            title="Revelar manualmente"
            icon="✨"
            onPress={manualReveal}
            secondary
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#110C17",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  moon: {
    fontSize: 45,
    color: "#C084FC",
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 5,
  },

  description: {
    color: "#AFA2B8",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 20,
  },

  counter: {
    backgroundColor: "#2B1A3B",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 15,
  },

  counterText: {
    color: "#D9B8FF",
    fontWeight: "800",
  },

  warning: {
    color: "#E5A6A6",
    marginTop: 12,
    textAlign: "center",
  },

  revealedTitle: {
    color: "#C084FC",
    fontSize: 23,
    fontWeight: "900",
    marginTop: 18,
  },

  revealedMeaning: {
    color: "#C9BDD3",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 8,
  },

  buttons: {
    width: "100%",
    marginTop: 18,
  },
});
