import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const EstacionamentosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estacionamentos Disponíveis</Text>
      {/* Aqui você pode listar os estacionamentos disponíveis */}
    </View>
  );
};

const QRCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerar QR Code</Text>
      {/* Aqui você pode adicionar a funcionalidade para gerar o QR Code */}
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
    margin: 50,
  },
});

export default App;
