import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Importa os ícones do FontAwesome

const MapScreen = ({ route, navigation }) => {
    const { vehicleLocation } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: vehicleLocation.latitude,
                    longitude: vehicleLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {vehicleLocation && (
                    <Marker
                        coordinate={{ latitude: vehicleLocation.latitude, longitude: vehicleLocation.longitude }}
                        title="Localização do Veículo"
                    >
                        <FontAwesomeIcon name="car" size={30} color="#FFD643" />
                    </Marker>
                )}
            </MapView>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <FontAwesomeIcon name="arrow-left" size={20} color="#FFD643" />
            </TouchableOpacity>
            <Text style={styles.text}>Localização do Veículo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '70%',
    },
    text: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 50,
        elevation: 3,
    },
});

export default MapScreen;
