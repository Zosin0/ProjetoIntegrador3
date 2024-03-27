import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native'; // Corrija a importação do Button para 'react-native'

// Importe todas as telas aqui
import EstacionamentosScreen from './screens/EstacionamentosScreen';
import PagarContaScreen from './screens/PagarConta';
import QRCodeScreen from './screens/QRCodeScreen';
import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LogoutScreen from './screens/LogoutScreen';

// Importe as novas telas
import HomeScreen from './screens/Home';
import SessionScreen from './screens/Session';
import PaymentsScreen from './screens/Payments';
import PaySteps from './screens/Pay';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DeveloperModeScreen = ({ navigation }) => {
  // Função para navegar para uma tela específica
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      {/* Botões para cada tela */}
      <Button title="Estacionamentos" onPress={() => navigateToScreen('Estacionamentos')} />
      <Button title="Pagar Conta" onPress={() => navigateToScreen('PagarConta')} />
      <Button title="QR Code" onPress={() => navigateToScreen('QRCode')} />
      <Button title="Initial" onPress={() => navigateToScreen('Initial')} />
      <Button title="Login" onPress={() => navigateToScreen('Login')} />
      <Button title="Register" onPress={() => navigateToScreen('Register')} />
      <Button title="Logout" onPress={() => navigateToScreen('Logout')} />

      {/* Adicione os botões para as novas telas */}
      <Button title="Inicial" onPress={() => navigateToScreen('HomeScreen')} />
      <Button title="Sessao" onPress={() => navigateToScreen('SessionScreen')} />
      <Button title="Pagamentos" onPress={() => navigateToScreen('PaymentsScreen')} />
      <Button title="PagamentoFluxo" onPress={() => navigateToScreen('PaymentFlow')} />

    </View>
  );
};

const DeveloperModeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeveloperMode" component={DeveloperModeScreen} />
      {/* Adicione aqui as telas que você deseja acessar no modo desenvolvedor */}
      <Stack.Screen name="Estacionamentos" component={EstacionamentosScreen} />
      <Stack.Screen name="PagarConta" component={PagarContaScreen} />
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />

      {/* Adicione as novas telas ao StackNavigator */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SessionScreen" component={SessionScreen} />
      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Stack.Screen name="PagamentoFluxo" component={PaySteps} />

    </Stack.Navigator>
  );
};

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [developerMode, setDeveloperMode] = useState(true); // Estado para controlar o modo de desenvolvedor

  useEffect(() => {
    // Aqui você pode verificar se o usuário está autenticado de alguma forma, por exemplo, verificando se há um token de autenticação armazenado no dispositivo
    const userLoggedIn = false; // Simulação de verificação de autenticação
    setIsUserLoggedIn(userLoggedIn);
  }, []);

  const handleDeveloperMode = () => {
    // Função para ativar o modo de desenvolvedor
    setDeveloperMode(true);
  };

  return (
    <NavigationContainer>
      {developerMode ? (
        <DeveloperModeStack />
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Initial" component={InitialScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Register" component={RegisterScreen} />
          <Tab.Screen name="DeveloperMode" component={DeveloperModeStack} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
