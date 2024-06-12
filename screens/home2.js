// Tela para cadastrar informações sobre dos carros: Placa...
// --> Vem diretamente da home.

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o conjunto de ícones Ionicons
import MenuHamburger from '../components/MenuHamburger';
import CenteredFooter from '../components/Footer';


const Home2 = ({ navigation }) => {


    return (
        <View style={styles.containerForm}>
            <MenuHamburger></MenuHamburger>
            <View style={styles.container}>
                <View style={styles.topo}>
                    <TouchableOpacity style={styles.topoButton1} onPress={() => navigation.navigate('Veiculo')}>
                        <Text>Pagar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topoButton2} onPress={() => navigation.navigate('Veiculo')}>
                        <Text>Pagar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.corpocima}>
                    <View>
                        <Text>Horario de entrada</Text>
                        <Text>30/04/2024</Text>
                        <Text>19:24</Text>
                    </View>
                    <View>
                        
                        <Image style={{
                            resizeMode: 'cover',
                            height: 200,
                            width: 200,
                            alignSelf: 'center',
                            marginTop: 20,
                            marginBottom: -80,
                        }} source={require('../assets/images/qrcode.png')} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Veiculo')}>
                        <Text style={styles.buttonText}>Pagar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.corpoBaixotot}>
                    <View style={styles.contCorpoBaixo}>
                        <Text>Meus Carros</Text>
                        <Text>Gerenciar</Text>
                    </View>
                    <View style={styles.corpoBaixo}>
                        <View style={styles.contCorpoBaixo}>
                            <Icon name="map-marker" size={25} color="#000" style={{ alignContent: 'center' }} />
                            <Text>teste</Text>
                        </View>
                        <View style={styles.contCorpoBaixo}>
                            <Icon name="plus" size={25} color="#000" style={{ alignContent: 'center' }} />
                            <Text>adicionar</Text>
                        </View>
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
        top: -130,
        backgroundColor: '#E2E6EE',
        padding: 15,
        borderRadius: 20,
        width: 300,
        elevation: 5,
        marginBottom: -35,
    },
    topo: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: '#9f9f9f',
        padding: 10,
        borderRadius: 10,
        width: 250,
        textAlign: 'center',
        alignSelf: 'center'
    },
    topoButton1: {
        borderRadius: 50,
        padding: 10,
    },
    topoButton2: {
        borderRadius: 50,
        padding: 10,
    },
    corpocima: {
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
    },
    corpoBaixotot: {
        backgroundColor: '#D0D0D0',
        padding: 5,
        borderRadius: 5,
        
    },
    corpoBaixo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddin: 10,
        margin: 5,
    },
    contCorpoBaixo: {
        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor: '#9f9f9f',
        padding: 5
    },



    button: {
        backgroundColor: '#FCE77B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 100,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#212529',
        fontSize: 13,
        alignContent: 'center',

    },
});
export default Home2;