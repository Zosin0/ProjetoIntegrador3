import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SessionScreen from './screens/SessionScreen';
import LogoutScreen from './screens/LogoutScreen';
import MenuHamburger from './components/MenuHamburger';
import CadastroPagamentoScreen from './screens/CadastroPagamentoScreen';
import CadastroVeiculoScreen from './screens/CadastroVeiculoScreen';
import PaySteps from './screens/EtapasDePagamentoScreen';
import Code from './components/code';
import SessaoDeEstacionamento from './screens/sessaoDeEstacionamento';

 // MUDANÇAS Rod
//import localizarCarro from './screens/localizarCarro';
import FormasDePagamento from './screens/FormasDePagamentoScreen';
import SessaoEstacionamentoQrCode from './screens/sessaoEstacionamentoQrCode';

const Stack = createStackNavigator();

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [authChecked, setAuthChecked] = useState(false); // Estado para verificar se a autenticação foi verificada

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsUserLoggedIn(true);
      }
      setAuthChecked(true); // Marca que a autenticação foi verificada
    };

    checkAuthentication();
  }, []);

  // Se a autenticação ainda não foi verificada, exibe uma tela de carregamento
  if (!authChecked) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={require('./assets/images/logo.png')} style={styles.logo} />
      </View>
    );
  }

  return (
<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress,
              transform: [
                {
                  scale: current.progress.interpolate({
                    inputRange: [1, 2],
                    outputRange: [1, 1],
                  }),
                },
              ],
            },
          }),
          animationEnabled: true, // Habilita a animação
        }}
        initialRouteName={isUserLoggedIn ? 'HomeLoggedIn' : 'HomeLoggedOut'}>
        <Stack.Screen name="HomeLoggedIn" component={Home} />
        <Stack.Screen name="HomeLoggedOut" component={HomeScreen} />
        <Stack.Screen name="Login" component={() => <LoginScreen setIsUserLoggedIn={setIsUserLoggedIn} />} />
        <Stack.Screen name="Logout" component={() =><LogoutScreen setIsUserLoggedIn={setIsUserLoggedIn} />}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
        <Stack.Screen name="Pagamento" component={CadastroPagamentoScreen}/>
        <Stack.Screen name="Veiculo" component={CadastroVeiculoScreen}/>
        <Stack.Screen name="Menu" component={MenuHamburger}/>
        <Stack.Screen name="QRCode" component={Code}/>
        <Stack.Screen name="PayStep" component={PaySteps}/>
        <Stack.Screen name="FormasDePagamento" component={FormasDePagamento}/>
        <Stack.Screen name="sessaoDeEstacionamento" component={SessaoDeEstacionamento}/>
        <Stack.Screen name="sessaoEstacionamentoQrCode" component={SessaoEstacionamentoQrCode}/>
        {/* <Stack.Screen name="localizarCarro" component={localizarCarro}/> */}
        {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isUserLoggedIn ? 'HomeLoggedIn' : 'HomeLoggedOut'}> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
<View style={styles.container}>
      <ImageBackground blurRadius={2} source={require("./assets/images/background_img.jpeg")} resizeMode="cover" style={styles.background}>
        <View style={styles.content}>
          <Image source={require("./assets/images/logo.png")} style={styles.logo} />
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonText} onPress={() => navigation.navigate('Login')}>Login</Button>
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonText} onPress={() => navigation.navigate('Register')}>Registre-se</Button>

          {/* MUDANÇAS ROD*/}

          <Button mode="contained" style={styles.button} labelStyle={styles.buttonText} onPress={() => navigation.navigate('sessaoDeEstacionamento')}>sessaoDeEstacionamento</Button>
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonText} onPress={() => navigation.navigate('sessaoEstacionamentoQrCode')}>sessaoEstacionamentoQrCode</Button>
        </View>
      </ImageBackground>
    </View>
  );
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
    bottom: 50,
  },
  button: {
    backgroundColor: '#FFD643',
    marginTop: 20,
    width: 200,
    borderRadius: 5,
    padding: 10,
    bottom: -150,
  },
  buttonText: {
    color: 'black',
  },
});

export default App;
