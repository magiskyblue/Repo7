
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import StackNavigator from "./StackNavigator";

import AboutScreen from "../screens/AboutScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import DailyCardScreen from "../screens/DailyCardScreen";
import ReadingsScreen from "../screens/ReadingsScreen";
import RitualScreen from "../screens/RitualScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TarotScreen from "../screens/TarotScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Principal"
      screenOptions={({ route }) => ({
        headerShown: true,

        headerStyle: {
          backgroundColor: "#17101F",
        },

        headerTintColor: "#fff",

        drawerStyle: {
          backgroundColor: "#17101F",
          width: 285,
        },

        drawerActiveBackgroundColor: "#38204D",
        drawerActiveTintColor: "#C084FC",
        drawerInactiveTintColor: "#B3A5BC",

        drawerLabelStyle: {
          fontWeight: "700",
          marginLeft: -10,
        },

        drawerIcon: ({ color, size }) => {
          const icons = {
            Principal: "home-outline",
            Tarot: "sparkles-outline",
            Ritual: "phone-portrait-outline",
            Lecturas: "book-outline",
            Agendar: "calendar-outline",
            Citas: "list-outline",
            "Carta del día": "moon-outline",
            Configuración: "settings-outline",
            Acerca: "information-circle-outline",
          };

          return (
            <Ionicons
              name={icons[route.name] || "ellipse-outline"}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Drawer.Screen
        name="Principal"
        component={StackNavigator}
        options={{
          title: "Inicio",
        }}
      />

      <Drawer.Screen
        name="Tarot"
        component={TarotScreen}
        options={{
          title: "Las 78 cartas",
        }}
      />

      <Drawer.Screen
        name="Ritual"
        component={RitualScreen}
        options={{
          title: "Ritual de la carta",
        }}
      />

      <Drawer.Screen
        name="Lecturas"
        component={ReadingsScreen}
        options={{
          title: "Tipos de lectura",
        }}
      />

      <Drawer.Screen
        name="Agendar"
        component={ScheduleScreen}
        options={{
          title: "Agendar lectura",
        }}
      />

      <Drawer.Screen
        name="Citas"
        component={AppointmentsScreen}
        options={{
          title: "Mis citas",
        }}
      />

      <Drawer.Screen
        name="Carta del día"
        component={DailyCardScreen}
        options={{
          title: "Carta del día",
        }}
      />

      <Drawer.Screen name="Configuración" component={SettingsScreen} />

      <Drawer.Screen
        name="Acerca"
        component={AboutScreen}
        options={{
          title: "Acerca de Arcana",
        }}
      />
    </Drawer.Navigator>
  );
}
