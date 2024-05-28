import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import MenuHamburger from '../components/MenuHamburger';
import CenteredFooter from '../components/Footer';

const SessionScreen = ({ navigation, setIsUserLoggedIn }) => {
    const [vehicleLocation, setVehicleLocation] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                setToken(token);
            } catch (error) {
                console.error('Erro ao carregar o token:', error);
            }
        };
        loadToken();
    }, []);

    const startParkingSession = async () => {
        const brazilDateTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        try {
            const response = await axios.post(
                'http://localhost:5000/api/v1/salvarQRCode',
                { brazilDateTime },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const data = response.data;
            if (data.success) {
                await AsyncStorage.setItem('token', response.data.qr_code);
                navigation.navigate('PayStep'); // Navega para a tela de estacionamento
            } else {
                console.error('Erro ao iniciar sessão:', data.message);
            }
        } catch (error) {
            console.error('Erro ao iniciar sessão:', error);
        }
    };

    const handleViewLocation = () => {
        if (!vehicleLocation) {
            getCurrentLocation();
        }
    };

    const getCurrentLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permissão de localização negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const currentLocation = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setVehicleLocation(currentLocation);
            navigation.navigate('Map', { vehicleLocation: currentLocation });
        } catch (error) {
            console.error('Erro ao obter a localização:', error);
        }
    };

    return (
        <View style={styles.containerForm}>
            <MenuHamburger></MenuHamburger>
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 20 }}>Sessão de Estacionamento</Text>

                {!token && (
                    <TouchableOpacity style={styles.buttonBlack} onPress={startParkingSession}>
                        <FontAwesomeIcon name="car" size={20} color="white" style={styles.icon} />
                        <Text style={styles.buttonTextBlack}>Iniciar Sessão</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.containerForma}>
                    {token && (
                        <TouchableOpacity style={styles.buttonBlack} onPress={startParkingSession}>
                            <FontAwesomeIcon name="car" size={20} color="white" style={styles.icon} />
                            <Text style={styles.buttonTextBlack}>Iniciar Sessão</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <CenteredFooter/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    container: {
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        width: '100%',
        height: 600,
        alignItems: 'center'
    },
    containerForma: {
        height: 480,
        width: 300,
    },
    buttonBlack: {
        backgroundColor: 'black',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 50,
        width: '100%',
        flexDirection: 'row'
    },
    buttonTextBlack: {
        color: 'white',
        fontSize: 20,
        alignContent: 'center',
        marginLeft: 50
    },
});

export default SessionScreen;
