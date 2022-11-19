import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import TwokLoaderHelper from '../model/TwokLoeaderHelper';

import CommunicationController from '../model/CC';


function Page1(props){
    const [loeaded, setLoaded] = useState(false)

    const sid = 'o0tLqcmkJ3E58qjbsW6L'
    
    useEffect(() => {handleRquest}, []);

    function handleRquest(){
        /*let Prova = new TwokLoaderHelper();
        await Prova.createList()
        .then(result => { props.setPage1(result), setLoaded(true)})*/
        props.setPage1()
         
    }

    
        return (
    <View>
        <Button title='Premi per fare la richiesta' onPress={handleRquest}></Button>
    </View>
    );

    
}
    


 
export default Page1;