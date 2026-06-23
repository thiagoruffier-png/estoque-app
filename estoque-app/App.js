import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { EstoqueProvider } from './src/context/EstoqueContext';
import AppNavigator from './src/navigation/AppNavigator';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Erro capturado pelo ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitulo}>Ocorreu um erro ao carregar o app</Text>
          <Text style={styles.errorMensagem}>{String(this.state.error?.message || this.state.error)}</Text>
          <Text style={styles.errorDica}>
            Verifique o console do navegador (F12 → Console) para mais detalhes.
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}


export default function App() {
  return (
    <ErrorBoundary>
      <EstoqueProvider>
        <StatusBar style="dark" />
        <AppNavigator />
      </EstoqueProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: '#FEF2F2',
    padding: 24,
    paddingTop: 80,
  },
  errorTitulo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#991B1B',
    marginBottom: 12,
  },
  errorMensagem: {
    fontSize: 14,
    color: '#7F1D1D',
    marginBottom: 16,
  },
  errorDica: {
    fontSize: 13,
    color: '#B91C1C',
  },
});
