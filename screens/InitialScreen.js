import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native'; // Adicione ImageBackground aqui

import { Button } from 'react-native-paper';
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
      <ImageBackground source={require("../assets/images/background1.png")} resizeMode="cover" style={styles.background}>
        <View style={styles.content}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} />
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonText}>Login</Button>
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonText}>Registre-se</Button>
        </View>
      </ImageBackground>
    </View>);
};

// Definir navigationOptions para ocultar a barra de navegação

// Definir navigationOptions para ocultar a barra de navegação
InitialScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 180,
    bottom: 90,
  },
  button: {
    backgroundColor: '#FFD643',
    marginTop: 30, // Adjust spacing between buttons and logo/text as needed
    width: 200, // Adjust width of the buttons as needed
    borderRadius: 5,
    padding: 10,
    bottom: -150,
  },
  buttonText: {
    color: 'black', // Change text color to black
  },

});

export default InitialScreen;
