import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fast Ticket</Text>
      <Button 
        title="Pagar Ticket"
        onPress={() => alert('Botão pressionado!')}
      />
      <View style={styles.navBar}>
        {/* Aqui você pode adicionar os botões da sua barra de navegação */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    margin: 50,
  },
  navBar: {
    height: 60,
    backgroundColor: '#eee',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});