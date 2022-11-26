import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import {React, useState, useEffect} from 'react';

import CommunicationController from './model/CC';

export default function App() {
  const [location, setLocation] = useState(null)
  const [lat , setLat] = useState(null)
  const [lon, setLon] = useState(null)

  async function locationPermissionAsync(){
    let canUseLocation = false;
    const grantedPermission = await Location.getForegroundPermissionsAsync()
    if (grantedPermission.status === "granted"){
      canUseLocation = true;
    } else {
      const permissionResponse = await Location.requestForegroundPermissionsAsync()
      if (permissionResponse.status === "granted") {
        canUseLocation = true;
      }
    }
    if(canUseLocation){
      const location = await Location.getCurrentPositionAsync()
      console.log("recived location:", location);
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      setLocation(location.coords.latitude + '-' + location.coords.latitude)
    }
  }

  const handleGetPosition = () => {
    locationPermissionAsync()
    .then(result => console.log(result))
  }

  const handlePress = () =>{
    console.log('pulsante schiacciato')
    CommunicationController.addTwok("cRhp7bW0fRDfYUfh0p02", "Testo di prova", "FFFFFF", "000000", 1, 1, 1, 1, lat, lon)
  }

  handleGetPosition()
  return (
    <View style={styles.container}>
      <Text>Aggiungi un twok con la tua posizione!</Text>
      <Text>{location}</Text>
      <Button title='Crea twok con la tua posizione' onPress={handlePress}></Button>
      <StatusBar style="auto" />
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
});
