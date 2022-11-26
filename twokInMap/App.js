import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {React, useState, useEffect} from 'react';
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps';
import Dimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

import CommunicationController from './model/CC';

export default function App() {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  useEffect(handleGetPosition.then(result => console.log(result)), [])


  async function handleGetPosition() {
    let posizione  = await CommunicationController.getTwok("cRhp7bW0fRDfYUfh0p02", null,  86)
    console.log(posizione)
    return posizione
  }

  //handleGetPosition()


  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 49.5,
        longitude: -121,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
      />
      <Marker
      coordinate={{latitude: 19, longitude: 100}}
      title="twok"
      description='descrizione'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
