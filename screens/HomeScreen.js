import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import MenuHamburger from '../components/MenuHamburger';
import CenteredFooter from '../components/Footer';

const Home = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  const [name, setName] = useState('');
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [Modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [complemento, setComplemento] = useState('');

  const getLocation = () => {
    // Lógica para obter a localização do usuário
  };

  const checkActiveSession = () => {
    // Lógica para verificar se existe uma sessão de estacionamento ativa
  };

  const readTicket = () => {
    // Lógica para ler o ticket de estacionamento
  };

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <MenuHamburger></MenuHamburger>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>Localização</Text>
        <Icon name="map-marker" size={18} color="#000" />
      </View>
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.topButtonText}>Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('SessionScreen')}>
          <Text style={styles.topButtonText}>Criar Sessão</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.qrSection}>
        <Text style={styles.entryTimeText}>Horário de Entrada</Text>
        <Text style={styles.dateText}>30/04/2024</Text>
        <Text style={styles.timeText}>19:24</Text>
        <Image
          style={styles.qrCode}
          source={require('../assets/images/qrcode.png')}
        />
        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PayStep')}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.myCarsSection}>
        <View style={styles.myCarsHeader}>
          <Text style={styles.myCarsTitle}>Meus Carros</Text>
          <TouchableOpacity>
            <Text style={styles.manageText}>Gerenciar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carsList}>
          <View style={styles.carItem}>
            <Image
              style={styles.carIcon}
              source={require('../assets/images/carro.png')}
            />
            <Text style={styles.carText}>Meu veículo PDT9J23</Text>
            <Icon name="check-circle" size={18} color="#4CAF50" style={styles.carCheckIcon} />
          </View>
          <TouchableOpacity style={styles.addCarItem}>
            <Icon name="plus" size={24} color="#000" />
            <Text style={styles.addCarText}>Adicionar Carro</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.partnersSection}>
        <Text style={styles.partnersTitle}>Estacionamentos Parceiros</Text>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Ver no mapa</Text>
        </TouchableOpacity>
      </View>
      <CenteredFooter/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    paddingRight: 20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '400',
    marginRight: 8,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  topButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  topButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  entryTimeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    marginBottom: 12,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  payButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  payButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  myCarsSection: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  myCarsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  myCarsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  manageText: {
    fontSize: 12,
    color: '#007BFF',
  },
  carsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  carIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  carText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
  },
  carCheckIcon: {
    marginLeft: 'auto',
  },
  addCarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  addCarText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
    marginLeft: 8,
  },
  partnersSection: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  partnersTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  mapButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  mapButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  topoButton1: {
    borderRadius: 50,
    padding: 10,
  },
});

export default Home;


    // <View style={styles.container}>
    //   {/* <Image source={require('../assets/images/background1.png')} style={styles.backgroundImage} /> */}
    //   <View style={styles.content}>
    //   <MenuHamburger></MenuHamburger>,
    //     <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
    //     <Text style={styles.title}>Você no estacionamento:</Text>
    
    //     <TouchableOpacity style={styles.button} onPress={getLocation}>
    //       <FontAwesome name="location-arrow" size={20} color="black" style={styles.icon} 
    //       onPress={() => navigation.navigate('')}
    //       />
    //       <Text style={styles.buttonText}>Pegar Localização</Text>
    //     </TouchableOpacity>
    
    //     <Text style={styles.title}>Opções:</Text>
    
    //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PayStep')}>
    //       <FontAwesome name="ticket" size={20} color="black" style={styles.icon} />
    //       <Text style={styles.buttonText}>Pagar Ticket</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('sessaoEstacionamentoQrCode')}>
    //       <FontAwesome name="ticket" size={20} color="black" style={styles.icon} />
    //       <Text style={styles.buttonText}>Pagar Ticket 2</Text>
    //     </TouchableOpacity>
    
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate('')}>
    //       <FontAwesome name="parking" size={20} color="black" style={styles.icon} />
    //       <Text style={styles.buttonText}>Estacionamentos Parceiros</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SessionScreen')}>
    //       <FontAwesome name="plus" size={20} color="black" style={styles.icon} />
    //       <Text style={styles.buttonText}>Criar uma sessão</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Logout')}>
    //       <FontAwesome name="faRightFromBracket" size={20} color="black" style={styles.icon} />
    //       <Text style={styles.buttonText}>Logout</Text>
    //     </TouchableOpacity>
    //     <CenteredFooter/>
    //   </View>
    // </View>
