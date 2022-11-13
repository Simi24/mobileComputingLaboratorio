import React from 'react';
import { StyleSheet, Text, View, AppState, FlatList, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';

const Contact = (props) => {
    console.log(props.data.nome)
    return (  
        <SafeAreaView>
            <Text>{props.data.nome}</Text>
            <Button title='Vedi dettagli' onPress={() => props.handleShowData(props.data)}></Button>
        </SafeAreaView>
    );
}

export default Contact;