
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";

import CardDetailScreen from "../screens/CardDetailScreen";
import DailyCardScreen from "../screens/DailyCardScreen";
import ReadingsScreen from "../screens/ReadingsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#17101F",
        },

        headerTintColor: "#fff",

        headerTitleStyle: {
          fontWeight: "800",
        },

        contentStyle: {
          backgroundColor: "#110C17",
        },
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Lecturas"
        component={ReadingsScreen}
        options={{
          title: "Tipos de lectura",
        }}
      />

      <Stack.Screen
        name="Agendar"
        component={ScheduleScreen}
        options={{
          title: "Agendar lectura",
        }}
      />

      <Stack.Screen
        name="Carta del día"
        component={DailyCardScreen}
        options={{
          title: "Carta del día",
        }}
      />

      <Stack.Screen
        name="Detalle de carta"
        component={CardDetailScreen}
        options={{
          title: "Carta",
        }}
      />
    </Stack.Navigator>
  );
}
