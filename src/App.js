import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Login from './components/Login';
import Register from './components/Register';
import AuthScreen from './components/AuthScreen';

export default function App() {
  return (
   <AuthScreen/>
  );
}


