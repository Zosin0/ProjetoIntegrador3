import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo'; // Importe o conjunto de ícones Ionicons
import { SafeAreaView } from 'react-native-web';



const CadastoPagamentoSccreen = (navigation) => {
    const [name, setName] = useState('');
    const [cartao, setCartao] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');

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
                <Text>informações de Pagamento</Text>
                <View>
                    <Text>Nome Completo</Text>
                    <TextInput style={styles.input} placeholder="Nome Completo" value={name} onChangeText={setName} />
                    <Text> Número do Cartão </Text>
                    <TextInput style={styles.input} placeholder='1234 1234 1234 1234' value={cartao} onChange={setCartao} />
                    <Text> Validade </Text>
                    <TextInput style={styles.input} placeholder='MM/YY' value={validade} onChange={setValidade} />
                    <Text> CVV </Text>
                    <TextInput style={styles.input} placeholder='***' value={cvv} onChange={setCvv} />
                    <Text> Cep de cobrança </Text>
                    <TextInput style={styles.input} placeholder='00000-000' value={cep} onChange={setCep} />
                    <Text> Complemento/ Número </Text>
                    <TextInput style={styles.input} placeholder='00000-000' value={complemento} onChange={setComplemento} />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    containerForm: {
        backgroundColor: 'white',
        width: 300,
        height: 630,
        textAlign: 'center',
        alignItems: 'center',
        padding: 40,
        borderRadius: 10,
    },
    text: {
        color: '#5B5C5D',
        padding: 30,
        top: 30,
        fontSize: 12,
    },
    inputtop: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 20
    },
    input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
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
export default CadastoPagamentoSccreen;