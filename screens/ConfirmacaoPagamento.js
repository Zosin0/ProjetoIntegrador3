import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentConfirmation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { message } = route.params;

  const finalizarPagamento = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        'https://parknpay.zoser.me/api/v1/pagamentoConfirmado',
        { valor: valorAPagar },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      const data = response.data;
      if (data.success) {
        navigation.navigate('PaymentConfirmation', { message: data.message });
      } else {
        console.error('Erro ao finalizar pagamento:', data.message);
      }
    } catch (error) {
      console.error('Erro ao finalizar pagamento:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentConfirmation;
