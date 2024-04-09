import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo'; // Importe o conjunto de ícones Ionicons
import { Entypo } from 'react-native-vector-icons';


const CadastoPagamentoSccreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [cartao, setCartao] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <View style={styles.containerForm}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
                    <Entypo
                        name={isMenuOpen ? 'cross' : 'menu'}
                        size={30}
                        color={'#FFD643'}
                    />
                </TouchableOpacity>
            </View>
            {isMenuOpen && (
                <View style={styles.menuItems}>
                    <Image source={require("../assets/images/logo.png")} style={styles.logo} />
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="home" size={20} color={'#FFD643'} />
                        <Text style={styles.menuItemText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="wallet" size={20} color={'#FFD643'} />
                        <Text style={styles.menuItemText}>Minhas formas de pagamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="traffic-cone" size={20} color={'#FFD643'} />
                        <Text style={styles.menuItemText}>Cadastrar veículo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="unread" size={20} color={'#FFD643'} />
                        <Text style={styles.menuItemText}>Histórico de estacionamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="users" size={20} color={'#FFD643'} />
                        <Text style={styles.menuItemText}>Meus perfis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Icon name="cross" size={20} color={'#FFD643'} />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
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


    logo: {
        position: 'relative',
        top: -50,
        left: 150,
        width: 80,
        height: 50,
    },
    containerMenu: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 17,
    },
    header: {
        position: 'absolute',
        zIndex: 1,
        height: 700,
        backgroundColor: '#white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 250,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
    menuButton: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    menuIcon: {
        fontSize: 30,
        color: '#fff',
    },
    menuItems: {
        zIndex: 1,
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        width: 250,
        backgroundColor: '#EEE',
    },
    menuItem: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginVertical: 3,
        left: 20,
    },
    menuItemText: {
        fontSize: 13,
        left: 15
    },
});
export default CadastoPagamentoSccreen;