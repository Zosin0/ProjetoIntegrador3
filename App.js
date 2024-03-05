import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const App = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/exemplo');
      const json = await response.json();
      setDados(json);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

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
      <Text style={styles.apiTitle}>Dados da API Flask:</Text>
      {dados ? (
        <Text style={styles.apiData}>{dados.mensagem}</Text>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
      <Button title="Recarregar Dados" onPress={fetchData} />
    </View>
  );
};

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
  apiTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  apiData: {
    fontSize: 16,
    color: 'blue',
  },
  loadingText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default App;