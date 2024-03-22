import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InitialScreen = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register'); // Navega para a tela de registro
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Navega para a tela de login
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('/assets/images/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={[styles.button, { bottom: 100 }]} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { bottom: 50 }]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definir navigationOptions para ocultar a barra de navegação
InitialScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Define o fundo da tela como branco
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 250, // Aumenta o espaçamento entre a logo e os botões
  },
  button: {
    backgroundColor: '#FCE77B',
    paddingVertical: 10,
    marginBottom: 20, 
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#212529',
    fontSize: 18,
  },
});

export default InitialScreen;
