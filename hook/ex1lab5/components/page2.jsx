import React from 'react';
import { StyleSheet, Text, View, AppState, FlatList, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';
import Page1 from './page1';
import Contact from './contact';

function Page2(props) {
    const handleGoBack = () =>{
        console.log('go Back premuto')
        props.setPage0()
    }
    //console.log(props)
    function handlePversion(utente){
        if(utente.pversion == 0) {
            return <SafeAreaView>
                <Text>L'utente {utente.nome} non ha nessuna immagine del profilo</Text>
            </SafeAreaView>
        } else {
            return <SafeAreaView>
                <Text>L'utente {utente.nome} ha la versione dell'immagine del profilo {utente.pversion}</Text>
            </SafeAreaView>
        }

    

    }
    return ( 
        <SafeAreaView>
            <Text>Questa è la pagina di {props.user.nome}</Text>
            {handlePversion(props.user)}
            <Button title='Go Back' onPress={handleGoBack}></Button>
        </SafeAreaView>
     );
}

export default Page2;