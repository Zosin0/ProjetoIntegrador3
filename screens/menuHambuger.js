import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Entypo';

const MenuHamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Park Pay</Text>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 37
    },
    header: {
        height: 60,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250
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
        flex: 1,
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


export default MenuHamburger;
