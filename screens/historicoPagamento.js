import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o conjunto de ícones Ionicons
import MenuHamburger from '../components/MenuHamburger';
import CenteredFooter from '../components/Footer';



import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

const data = [
    { id: '#15267', date: 'Mar 1, 2023', total: 100 },
    { id: '#153587', date: 'Jan 26, 2023', total: 300 },
    { id: '#17436', date: 'Feb 12, 2023', total: 100 },
    { id: '#16879', date: 'Feb 12, 2023', total: 500 },
    { id: '#16378', date: 'Feb 28, 2023', total: 500 },
    { id: '#16609', date: 'March 13, 2023', total: 100 },
    { id: '#16907', date: 'March 18, 2023', total: 100 },
];

const App = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.id}</Text>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.total}</Text>
        </View>
    );

    return (
        <View style={styles.containerForm}>
            <MenuHamburger></MenuHamburger>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.header}>
                    <Text style={styles.title}>Histórico</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Tudo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Finalizados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Em aberto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Rejeitados</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                />
            </SafeAreaView>
            <CenteredFooter></CenteredFooter>
        </View>
    );
};

const styles = StyleSheet.create({
    containerForm: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: -1,
        borderRadius: 20,
        top: -280,
    },
    header: {
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    buttonText: {
        fontSize: 16,
    },
    list: {
        paddingHorizontal: 26,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomWidth: 1.5,
        borderBottomColor: '#e8e8e8',
    },
    text: {
        fontSize: 16,
    },
});

export default App;
