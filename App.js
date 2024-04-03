// App.js
import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Home from './screens/Home';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

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
