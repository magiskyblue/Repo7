
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppointmentsScreen from "../screens/AppointmentsScreen";
import HomeScreen from "../screens/HomeScreen";
import RitualScreen from "../screens/RitualScreen";
import TarotScreen from "../screens/TarotScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#17101F",
          borderTopColor: "#34233F",
          height: 65,
          paddingBottom: 7,
          paddingTop: 5,
        },

        tabBarActiveTintColor: "#C084FC",
        tabBarInactiveTintColor: "#74667C",

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
        },

        tabBarIcon: ({ color, size }) => {
          let icon = "ellipse";

          if (route.name === "Inicio") {
            icon = "home-outline";
          }

          if (route.name === "Tarot") {
            icon = "sparkles-outline";
          }

          if (route.name === "Ritual") {
            icon = "phone-portrait-outline";
          }

          if (route.name === "Citas") {
            icon = "calendar-outline";
          }

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />

      <Tab.Screen name="Tarot" component={TarotScreen} />

      <Tab.Screen name="Ritual" component={RitualScreen} />

      <Tab.Screen name="Citas" component={AppointmentsScreen} />
    </Tab.Navigator>
  );
}
