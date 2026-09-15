import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GyroscopeSensor from 'expo-sensors/build/Gyroscope';
import MagnetometerSensor from './components/MagnetometerSensor';
import PedometerSensor from './components/PedometerSensor';

export default function App() {
  return (
    <View style={styles.container}>
      <PedometerSensor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: ' #058000',
   alignItems: 'center',
   justifyContent: 'center',
  },
});
