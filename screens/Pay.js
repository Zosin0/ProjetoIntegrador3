import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe FontAwesome para usar ícones

const PaySteps = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('/assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Fluxo de Pagar</Text>

            <TouchableOpacity style={styles.step} onPress={() => navigation.navigate('EscolherMetodo')}>
                <FontAwesome name="credit-card" size={24} color="white" style={styles.icon} />
                <Text style={styles.stepText}>Escolher Método de Pagamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step} onPress={() => navigation.navigate('PIX')}>
                <FontAwesome name="money" size={24} color="white" style={styles.icon} />
                <Text style={styles.stepText}>PIX (Tela de Espera)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step} onPress={() => navigation.navigate('Cartao')}>
                <FontAwesome name="credit-card" size={24} color="white" style={styles.icon} />
                <Text style={styles.stepText}>Cartão</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step} onPress={() => navigation.navigate('Confirmacao')}>
                <FontAwesome name="check" size={24} color="white" style={styles.icon} />
                <Text style={styles.stepText}>Confirmação de Saída</Text>
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
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    step: {
        flexDirection: 'row',
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default PaySteps;
