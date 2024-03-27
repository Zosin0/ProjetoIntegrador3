import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe FontAwesome para usar ícones

const PaymentsScreen = ({ navigation, setIsUserLoggedIn }) => {
    
    return (
        <View style={styles.container}>
            <Image source={require('/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Meus Pagamentos</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HistoricoPagamentos')}>
                <FontAwesome name="history" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Histórico de Pagamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarPagamento')}>
                <FontAwesome name="credit-card" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Cadastrar Nova Forma de Pagamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditarPagamento')}>
                <FontAwesome name="edit" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Editar Formas de Pagamento</Text>
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
        flexDirection: 'row',
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default PaymentsScreen;
