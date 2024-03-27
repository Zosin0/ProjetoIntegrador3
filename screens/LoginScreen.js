// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation, setIsUserLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const data = response.data;
      if (data.success) {
        console.log('Usuário autenticado com sucesso:', data.message);
        setIsUserLoggedIn(true); // Altera o estado para logado
      } else {
        console.error('Erro ao autenticar:', data.message);
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  };


  return (
    <LinearGradient
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      colors={['#FDDF76', '#172B4D']}>


      <View style={styles.containerForm}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.text}>Preencha seus dados de login</Text>
        <TextInput
          style={styles.inputtop}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>


  );
};

const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: 'white',
    width: 350,
    height: 680,
    textAlign: 'center',
    alignItems: 'center',
    padding: 40,
    borderRadius: 10,
  },
  text: {
    color: '#5B5C5D',
    padding: 30,
    top: 30,
    fontSize: 13,
  },
  inputtop: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#black',
    borderRadius: 5,
    marginTop: 20
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#black',
    borderRadius: 5,
    marginTop: 5
  },
  button: {
    backgroundColor: '#FCE77B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 35,
    marginTop: 45,
    width: 170
  },
  buttonText: {
    color: '#212529',
    fontSize: 18,
    textAlign: 'center'
  },
  registerText: {
    marginTop: 10,
    color: '#007bff',
  },
  logo: {
    width: 250,
    height: 160,
    top: 10
  },

});

export default LoginScreen;
