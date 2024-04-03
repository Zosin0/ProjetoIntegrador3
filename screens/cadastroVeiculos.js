import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o conjunto de ícones Ionicons



const CadastoVeiculoSccreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [Modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [complemento, setComplemento] = useState('');

    return (
        <View style={styles.containerForm}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Icon name="car" size={35} color={'#FFD643'} children={<Text style={styles.sla}></Text>} />
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Cadastrar Carro</Text>
                </View>
                <Text>Apelido</Text>
                <TextInput style={styles.input} placeholder="apelido" value={name} onChangeText={setName} />
                <Text> Placa </Text>
                <TextInput style={styles.input} placeholder='XXXXXXX' value={placa} onChange={setPlaca} />
                <View style={styles.containerValidade}>
                    <View style={styles.box}>
                        <Text> Marca </Text>
                        <TextInput style={styles.inputDiferente} placeholder='XXXXXXXX' value={marca} onChange={setMarca} />
                    </View>
                    <View style={styles.box}>
                        <Text> Modelo </Text>
                        <TextInput style={styles.inputDiferente} placeholder='***' value={Modelo} onChange={setModelo} />
                    </View>
                </View>
                <Text> Ano </Text>
                <TextInput style={styles.input} placeholder='MM/YY' value={ano} onChange={setAno} />
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
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 25,
        marginTop: 10,
        width: '100%'
    },
    buttonText: {
        color: '#212529',
        fontSize: 18,
        textAlign: 'center'
    },
});
export default CadastoVeiculoSccreen;