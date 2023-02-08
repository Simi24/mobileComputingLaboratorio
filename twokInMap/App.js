
import { StyleSheet, Text, View} from 'react-native';
import {React, useState, useEffect} from 'react';

import MapView from 'react-native-maps';

import Marker  from 'react-native-maps';


export default function App() {

  const handleRegionChanged = (region) => {
    console.log(region);
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      onRegionChange={handleRegionChanged}
      initialRegion={{
        latitude: 49.5,
        longitude: -120,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
      />
      <Marker
        title="prova"
        coordinate={{latitude: 49.5, longitude: -120}}
        description = "descrizione"
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
