import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Importa os ícones do FontAwesome
import QRCode from 'react-native-qrcode-svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import MenuHamburger from '../components/MenuHamburger';
import CenteredFooter from '../components/Footer';


const SessionScreen = ({ navigation, setIsUserLoggedIn }) => {
    const [sessionData, setSessionData] = useState(null);
    const [vehicleLocation, setVehicleLocation] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                console.log(token)
                setToken(token);
            } catch (error) {
                console.error('Erro ao carregar o token:', error);
            }
        };
        loadToken();
    }, []);

    const startPayment = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/v1/pagarEstacionamento',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const data = response.data;
            if (data.success) {
                navigation.navigate('PayStep')

            } else {
                console.error('Erro ao salvar QR Code:', data.message);
            }
        } catch (error) {
            console.error('Erro ao salvar QR Code:', error);
        }
    };

    const startParkingSession = async () => {
        const brazilDateTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        setSessionData(brazilDateTime);
        console.log(token)
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
                console.log('QR Code salvo com sucesso:', data.message);
                navigation.navigate('HomeLoggedIn')
            } else {
                console.error('Erro ao salvar QR Code:', data.message);
            }


        } catch (error) {
            console.error('Erro ao salvar QR Code:', error);
        }
    };

    const handleViewLocation = () => {
        // Se a localização do veículo ainda não foi definida, define-a
        if (!vehicleLocation) {
            getCurrentLocation();
        }
        //else {
        //     navigation.navigate('Map', { vehicleLocation });
        // }
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

                {sessionData ? (
                    <View style={styles.qrCodeContainer}>
                        <QRCode
                            value={sessionData}
                            size={250}
                        />
                    </View>
                ) : (
                    <>
                        {!token && (
                            <TouchableOpacity style={styles.buttonBlack} onPress={startParkingSession}>
                                <FontAwesomeIcon name="car" size={20} color="white" style={styles.icon} />
                                <Text style={styles.buttonTextBlack}>Iniciar Sessão</Text>
                            </TouchableOpacity>
                        )}
                    </>
                )}

                <View style={styles.containerForma}>
                    {token && (
                        <>
                            <TouchableOpacity style={styles.buttonBlack} onPress={startParkingSession}>
                                <FontAwesomeIcon name="car" size={20} color="white" style={styles.icon} />
                                <Text style={styles.buttonTextBlack}>Iniciar Sessão</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={handleViewLocation}>
                                <FontAwesomeIcon name="map-marker" size={20} color="black" style={styles.icon} />
                                <Text style={[styles.buttonText]}>
                                    {vehicleLocation ? 'Ver Localização do Carro' : 'Registrar Localização do Meu Veículo'}
                                </Text>
                            </TouchableOpacity>

                        </>
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
    containerForma: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        zIndex: -1,
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
    formaPagamento: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#9f9f9f',
        borderRadius: 5,
        marginTop: 40,
        width: 200,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#FDDF76',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 50,
        width: '100%',
        flexDirection: 'row'
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        alignContent: 'center',  
        marginLeft: 50
    },
    buttonTextBlack: {
        color: 'white',
        fontSize: 20,
        alignContent: 'center',  
        marginLeft: 50
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
});1

export default SessionScreen;
