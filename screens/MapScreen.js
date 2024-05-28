import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  const generateMapUrl = (latitude, longitude) => {
    return `https://www.google.com/maps/embed/v1/view?key=AIzaSyBetTEVFbh__xVtKrgBjZ5JaTCbnRcml40&center=${latitude},${longitude}&zoom=15`;
  };

  return (
    <View style={styles.container}>
      {location ? (
        <WebView
          style={styles.webview}
          source={{ uri: generateMapUrl(location.latitude, location.longitude) }}
        />
      ) : (
        <Text>Carregando mapa...</Text>
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
});

export default MapScreen;
