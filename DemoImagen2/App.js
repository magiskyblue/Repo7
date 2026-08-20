import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DemoImagen from './componentes/DemoImagen';

export default function App() {
  return (
    <View style={styles.container}>
      <DemoImagen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b35b4',
  },

  panel1: {
    flex: 1,
    backgroundColor: '#3596b4',
  }, 
  panel2: {
    flex: 1,
    backgroundColor: '#c53378',
  },
  panel3: {
    flex: 1,
    backgroundColor: '#eeeb2d',
  },    
});