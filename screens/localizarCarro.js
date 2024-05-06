import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o conjunto de ícones Ionicons
import MenuHamburger from './MenuHambuger';
import CenteredFooter from './Footer';
import MapView from 'react-native-maps';



const LocalizarCarro = ({ navigation }) => {

    return (
        <View style={styles.containerForm}>
            <MenuHamburger></MenuHamburger>
            <View style={styles.container}>
                <MapView style={styles.map} />
                <View style={styles.texto}>
                    <Text style={styles.titulo}>LOCALIZAR VEICULO</Text>
                    <Text>Selecionar VEICULO</Text>
                    <View style={styles.containerCar}>
                        <View style={styles.containerImage}>
                            <Image source={require('../assets/images/carro.png')}></Image>
                            <Text>Apelido Carro</Text>
                        </View>
                        <View style={styles.containerImage}>
                            <Image source={require('../assets/images/carro.png')}></Image>
                            <Text>Apelido Carro</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Localização do veículo</Text>
                        <Text>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
                    </View>
                </View>

            </View>
            <CenteredFooter />
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
        top: 25,
        backgroundColor: '#E2E6EE',
        borderRadius: 20,
        width: '100%',
        elevation: 5,
        alignItems: 'center'
    },
    texto: {
        marginTop: 20,
        width: 300,
        justifyContent: 'center',
        alignContent: 'center',
    },
    map: {
        width: '100%',
        height: '57%',
    },
    containerCar: {
        width: 150,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    containerImage:{
        margin: 3,
        alignItems: 'center',
        marginBottom: 20
    },
    titulo:{
        fontWeight: 'bold',
        marginBottom: 5,
    }
});
export default LocalizarCarro;