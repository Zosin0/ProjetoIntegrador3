// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EstacionamentosScreen from '/screens/EstacionamentosScreen';
import PagarContaScreen from '/screens/PagarConta';
import QRCodeScreen from '/screens/QRCodeScreen';
import InitialScreen from '/screens/InitialScreen';
import LoginScreen from '/screens/LoginScreen';
import RegisterScreen from '/screens/RegisterScreen';
import LogoutScreen from '/screens/LogoutScreen'; // Certifique-se de importar LogoutScreen

const Tab = createBottomTabNavigator();

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Aqui você pode verificar se o usuário está autenticado de alguma forma, por exemplo, verificando se há um token de autenticação armazenado no dispositivo
    const userLoggedIn = false; // Simulação de verificação de autenticação
    setIsUserLoggedIn(userLoggedIn);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {!isUserLoggedIn ? (
          <>
            <Tab.Screen name="Initial" component={InitialScreen} />
            <Tab.Screen
              name="Login"
              children={() => <LoginScreen setIsUserLoggedIn={setIsUserLoggedIn} />}
              options={{ tabBarVisible: false, headerShown: false }}
            />
            <Tab.Screen
              name="Register"
              component={RegisterScreen}
              options={{ tabBarVisible: false, headerShown: false }}
            />
          </>
        ) : (
          <>
            <Tab.Screen name="Estacionamentos" component={EstacionamentosScreen} />
            <Tab.Screen name="QRCode" component={QRCodeScreen} />
            <Tab.Screen name="PagarConta" component={PagarContaScreen} />
            <Tab.Screen name="Logout" children={() => <LogoutScreen setIsUserLoggedIn={setIsUserLoggedIn} />} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
