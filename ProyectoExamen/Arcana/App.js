import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { AppProvider } from "./src/context/AppContext";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
