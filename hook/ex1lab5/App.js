import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppState, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';
import Parte1 from './components/parte1';
import Parte2 from './components/parte2';

export default function App() {
  console.log(AppState.currentState)
  let [parte, setParte] = useState(0);

  const handleHomePage = () => {
    setParte(parte = 0)
  }

  const handleParte1 = () => {
    setParte(parte = 1)
  }

  const handleParte2 = () => {
    setParte(parte = 2)
    console.log(parte)
  }

  if(parte == 0) {
   return (
    <SafeAreaView style={styles.container}>
      <Button title='Parte 1' onPress={handleParte1}></Button><Button title='Parte 2' onPress={handleParte2}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
    ); 
  } else if(parte == 1){
    return (
      <SafeAreaView>
        <Parte1></Parte1>
  
        <Button title='HomePage' onPress={handleHomePage}></Button><Button title='Parte 2' onPress={handleParte2}></Button>
      </SafeAreaView>
    );
  } else if(parte == 2) {
    return(<SafeAreaView>
      <Parte2></Parte2>
      <Button title='HomePage' onPress={handleHomePage}></Button><Button title='Parte 1' onPress={handleParte1}></Button>
    </SafeAreaView>)
    
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
