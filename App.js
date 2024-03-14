import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EstacionamentosScreen from './payNpark/screens/EstacionamentosScreen';
import PagarContaScreen from '..payNpark/screens/PagarContaScreen';
import QRCodeScreen from '..payNpark/screens/QRCodeScreen';

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

export default App;
