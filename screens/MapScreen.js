import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [vehicleLocation, setVehicleLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);

      const storedVehicleLocation = await AsyncStorage.getItem('vehicleLocation');
      if (storedVehicleLocation) {
        setVehicleLocation(JSON.parse(storedVehicleLocation));
      }
    })();
  }, []);

  const addVehicleLocation = async () => {
    setVehicleLocation(location);
    await AsyncStorage.setItem('vehicleLocation', JSON.stringify(location));
  };

  const generateMapHTML = (latitude, longitude, vehicleLatitude, vehicleLongitude) => {
    const apiKey = 'AIzaSyBetTEVFbh__xVtKrgBjZ5JaTCbnRcml40'; // Replace with your actual API key
    return `
      <html>
      <head>
        <style type="text/css">
          body, html, #map { height: 80%; margin: 3; padding: 3;}
        </style>
      </head>
      <body>
        <iframe
          width="100%"
          height="100%"
          frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=15" allowfullscreen>
        </iframe>
        ${vehicleLatitude && vehicleLongitude ? `<img src="https://path-to-your-car-icon.png" style="position: absolute; top: ${vehicleLatitude}px; left: ${vehicleLongitude}px;" />` : ''}
      </body>
      </html>
    `;
  };

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <WebView
            originWhitelist={['*']}
            style={styles.webview}
            source={{ html: generateMapHTML(location.latitude, location.longitude, vehicleLocation?.latitude, vehicleLocation?.longitude) }}
          />
          <Button style={"botadd"} title="Add Vehicle Location" onPress={addVehicleLocation} />
        </>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  botaoadd: {
    bottom: 50,
    right: 0,
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 10,
  }

});

export default MapScreen;