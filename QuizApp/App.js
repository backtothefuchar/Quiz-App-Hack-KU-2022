import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/homescreen/home';
import Quiz from './src/screens/quiz/quiz';
import Result from './src/screens/result/result';

export default function App() {
  return (
    <View style={styles.container}>
      <Result />
      <StatusBar style={styles.statusBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111d52',
  },
  statusBar: {
  },
});
