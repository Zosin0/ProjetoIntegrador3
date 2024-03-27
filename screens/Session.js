import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const SessionScreen = ({ navigation, setIsUserLoggedIn }) => {
    
    // Função para verificar se existe uma sessão ativa
    const checkActiveSession = () => {
        // Lógica para verificar se existe uma sessão de estacionamento ativa
    };

    return (
        <View style={styles.container}>
            <Image source={require('/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Sessão de Estacionamento</Text>

            <TouchableOpacity style={styles.button} onPress={checkActiveSession}>
                <Text style={styles.buttonText}>Ver Localização do Carro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={checkActiveSession}>
                <Text style={styles.buttonText}>Ver QR CODE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={checkActiveSession}>
                <Text style={styles.buttonText}>Terminar Sessão (Pagar)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicial')}>
                <Text style={styles.buttonText}>Iniciar Sessão</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Define o fundo da tela como branco
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 50, // Aumenta o espaçamento entre a logo e os botões
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
        width: 250,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SessionScreen;
