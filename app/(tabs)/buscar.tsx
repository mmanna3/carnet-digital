import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BuscarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de búsqueda en desarrollo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#666',
  },
}); 