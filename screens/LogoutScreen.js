import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import AsyncStorage from '@react-native-async-storage/async-storage';


const LogoutScreen = ({ setIsUserLoggedIn }) => {
    const navigation = useNavigation(); // Use useNavigation hook to get navigation object

    const handleLogout = () => {
        AsyncStorage.removeItem('token').then(() => {
            console.log('Token removido!');
          });        
          setIsUserLoggedIn(false);
        console.log('Usuário deslogado com sucesso');
        navigation.navigate('HomeLoggedOut')
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Button title="Logout" onPress={handleLogout} style={styles.button} />
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
        marginBottom: 250, // Aumenta o espaçamento entre a logo e os botões
    },
    button: {
        backgroundColor: '#FCE77B',
        paddingVertical: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#212529',
        fontSize: 18,
    },
});

export default LogoutScreen;