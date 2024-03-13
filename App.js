import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

const EstacionamentosScreen = () => {
  const [estacionamentos, setEstacionamentos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/estacionamentos'); // Substitua pelo seu endpoint

      const data = response.data;
      setEstacionamentos(data);
    } catch (error) {
      console.error('Erro ao buscar estacionamentos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estacionamentos Disponíveis</Text>
      <FlatList
        data={estacionamentos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const QRCodeScreen = () => {
  const [qrCodeData, setQRCodeData] = useState(null);
  const handleGenerateQRCode = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/qrcodes');
      setQRCodeData(response.data); // Corrigido para definir qrCodeData com a resposta da API
    } catch (error) {
      console.error('Erro ao gerar QR code:', error);
    }
  };
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Gerar QR Code</Text>
      <Button title="Gerar QR Code" onPress={handleGenerateQRCode} />
      {qrCodeData && (
        <View>
          {/* Exibir o QR code aqui */}
          <Text>{qrCodeData}</Text> {/* Exemplo: exibir os dados do QR code como texto */}
        </View>
      )}
    </View>
  );
};


const PagarContaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagar Conta</Text>
      {/* Aqui você pode adicionar a funcionalidade para pagar a conta */}
    </View>
  );
};

const Tab = createBottomTabNavigator();

// Mantenha a exportação padrão do componente App
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Estacionamentos" component={EstacionamentosScreen} />
        <Tab.Screen name="QRCode" component={QRCodeScreen} />
        <Tab.Screen name="PagarConta" component={PagarContaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    margin: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;
