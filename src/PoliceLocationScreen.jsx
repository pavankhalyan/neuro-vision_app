import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const PoliceLocationScreen = () => {
    const initialRegion = {
        latitude: 12.7409,
        longitude: 77.8236,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: 12.7409, longitude: 77.8236 }}
          title="Hosur, Tamil Nadu"
          description="This is Hosur in Tamil Nadu"
        />
      </MapView>
    </View>
  )
}

export default PoliceLocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      text: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        fontSize: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
      },
})