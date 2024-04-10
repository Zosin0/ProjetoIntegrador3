import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo'; // Importe o conjunto de ícones Ionicons
import MenuHamburger from './menuHambuger';

const CadastoPagamentoSccreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [cartao, setCartao] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    return (
        <View style={styles.containerForm}>
            <MenuHamburger></MenuHamburger>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Icon name="user" size={55} color={'#FFD643'} children={<Text style={styles.sla}></Text>} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>informações de Pagamento</Text>
                </View>
                <Text>Nome Completo</Text>
                <TextInput style={styles.input} placeholder="Nome Completo" value={name} onChangeText={setName} />
                <Text> Número do Cartão </Text>
                <TextInput style={styles.input} placeholder='1234 1234 1234 1234' value={cartao} onChange={setCartao} />
                <View style={styles.containerValidade}>
                    <View style={styles.box}>
                        <Text> Validade </Text>
                        <TextInput style={styles.inputDiferente} placeholder='MM/YY' value={validade} onChange={setValidade} />
                    </View>
                    <View style={styles.box}>
                        <Text> CVV </Text>
                        <TextInput style={styles.inputDiferente} placeholder='***' value={cvv} onChange={setCvv} />
                    </View>
                </View>
                <Text> CEP de cobrança </Text>
                <TextInput style={styles.input} placeholder='00000-000' value={cep} onChange={setCep} />
                <Text> Complemento/ Número </Text>
                <TextInput style={styles.input} placeholder='00000-000' value={complemento} onChange={setComplemento} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerForm: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        zIndex: -1,
        top:-110,
        backgroundColor: '#E2E6EE',
        padding: 15,
        borderRadius: 20,
        width: 300,
        elevation: 5,
    },
    head: {
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        width: 250,
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: '#BCC3D1',
    },

    containerValidade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250
    },

    box: {
        justifyContent: 'center',

    },

    inputDiferente: {
        width: 120,
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: '#BCC3D1',
    },

    button: {
        backgroundColor: '#FCE77B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 35,
        marginTop: 10,
        width: '100%'
    },
    buttonText: {
        color: '#212529',
        fontSize: 18,
        textAlign: 'center'
    },

});
export default CadastoPagamentoSccreen;