import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import TwokLoaderHelper from '../model/TwokLoeaderHelper';

import CommunicationController from '../model/CC';


function Page1(props){

    const sid = 'o0tLqcmkJ3E58qjbsW6L'
    
    useEffect(() => {handleRquest}, []);

    async function handleRquest(){
        let Prova = new TwokLoaderHelper();
        await Prova.createList()
        .then(result => { props.setPage1(result)})  
    }

    return (<View><Button title='Premi per fare la richiesta' onPress={handleRquest}></Button></View>);
}
    


 
export default Page1;