import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AmbLocationScreen = () => {
  const [startLocation, setStartLocation] = useState({ latitude: 12.7409, longitude: 77.8236 });
  const [endLocation, setEndLocation] = useState(null);
  const [route, setRoute] = useState(null);

  const initialRegion = {
    latitude: 12.7409,
    longitude: 77.8236,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const handleDirectionsReady = (result) => {
    setRoute(result.coordinates);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={startLocation}
          title="Start Location"
        />
        {endLocation && (
          <Marker
            coordinate={endLocation}
            title="End Location"
          />
        )}
        {route && (
          <Polyline
            coordinates={route}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
        {endLocation && (
          <MapViewDirections
            origin={startLocation}
            destination={endLocation}
            apikey="YOUR_GOOGLE_MAPS_API_KEY"
            strokeWidth={4}
            strokeColor="blue"
            onReady={handleDirectionsReady}
          />
        )}
      </MapView>
      <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search Start Location"
          onPress={(data, details = null) => {
            const { lat, lng } = details.geometry.location;
            setStartLocation({ latitude: lat, longitude: lng });
          }}
          query={{
            key: 'YOUR_GOOGLE_PLACES_API_KEY',
            language: 'en',
          }}
          styles={{
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
          }}
          fetchDetails
        />
        <GooglePlacesAutocomplete
          placeholder="Search End Location"
          onPress={(data, details = null) => {
            const { lat, lng } = details.geometry.location;
            setEndLocation({ latitude: lat, longitude: lng });
          }}
          query={{
            key: 'YOUR_GOOGLE_PLACES_API_KEY',
            language: 'en',
          }}
          styles={{
            textInputContainer: styles.textInputContainer,
            textInput: styles.textInput,
          }}
          fetchDetails
        />
        <Button
          title="Show Route"
          onPress={() => endLocation && setRoute(null)}
        />
      </View>
    </View>
  );
};

export default AmbLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
