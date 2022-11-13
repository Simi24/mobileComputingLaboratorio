import React from 'react';
import { StyleSheet, Text, View, AppState, FlatList, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';

function Twok(props) {
    return ( 
        <SafeAreaView>
            <Text>{props.data.text}</Text>
            <Text>Scritto da: {props.data.name}</Text>
        </SafeAreaView>
     );
}

export default Twok;