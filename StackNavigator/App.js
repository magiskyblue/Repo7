import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ImcScreen from "./src/screens/IMCScreen";
import CurrencyScreen from "./src/screens/CurrencyScreen";
import TipScreen from "./src/screens/TipScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Menú principal" }}
        />

        <Stack.Screen
          name="IMC"
          component={ImcScreen}
          options={{ title: "Calculadora IMC" }}
        />

        <Stack.Screen
          name="divisas"
          component={CurrencyScreen}
          options={{ title: "Calculadora divisas" }}
        />

        <Stack.Screen
          name="tips"
          component={TipScreen}
          options={{ title: "Calculadora de propinas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
