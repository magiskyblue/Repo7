import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DadosScreen from './screens/DadosScreen';
import MemoramaScreen from './screens/MemoramaScreen';
import TicTacToeScreen from './screens/TicTacToeScreen';
import DivisasScreen from './screens/DivisasScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


// -----------------------------
// NAV TAB
// -----------------------------

function NavTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7C3AED',
      }}
    >

      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />

      <Tab.Screen
        name="Dados"
        component={DadosScreen}
        options={{
          tabBarLabel: 'Dados',
          tabBarIcon: () => <Text>🎲</Text>,
        }}
      />

      <Tab.Screen
        name="Memorama"
        component={MemoramaScreen}
        options={{
          tabBarLabel: 'Memorama',
          tabBarIcon: () => <Text>🧠</Text>,
        }}
      />

      <Tab.Screen
        name="Tic Tac Toe"
        component={TicTacToeScreen}
        options={{
          tabBarLabel: 'Tic Tac Toe',
          tabBarIcon: () => <Text>❌</Text>,
        }}
      />

      <Tab.Screen
        name="Divisas"
        component={DivisasScreen}
        options={{
          tabBarLabel: 'Divisas',
          tabBarIcon: () => <Text>💱</Text>,
        }}
      />

    </Tab.Navigator>
  );
}


// -----------------------------
// NAV DRAWER
// -----------------------------

function NavDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7C3AED',
        },

        headerTintColor: '#FFFFFF',

        drawerActiveTintColor: '#7C3AED',
      }}
    >

      <Drawer.Screen
        name="VixMaggie"
        component={NavTab}
        options={{
          title: 'VixMaggie',
        }}
      />

      <Drawer.Screen
        name="Inicio"
        component={HomeScreen}
      />

      <Drawer.Screen
        name="Lanzar dados"
        component={DadosScreen}
      />

      <Drawer.Screen
        name="Memorama"
        component={MemoramaScreen}
      />

      <Drawer.Screen
        name="Tic Tac Toe"
        component={TicTacToeScreen}
      />

      <Drawer.Screen
        name="Conversión de divisas"
        component={DivisasScreen}
      />

    </Drawer.Navigator>
  );
}


// -----------------------------
// APP
// -----------------------------

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);


  // SPLASH SCREEN

  if (loading) {
    return (
      <View style={styles.splash}>

        <Text style={styles.logo}>
          🚀
        </Text>

        <Text style={styles.title}>
          VixMaggie
        </Text>

        <Text style={styles.loading}>
          Cargando...
        </Text>

      </View>
    );
  }


  return (
    <NavigationContainer>
      <NavDrawer />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C3AED',
  },

  logo: {
    fontSize: 100,
  },

  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },

  loading: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
  },

});