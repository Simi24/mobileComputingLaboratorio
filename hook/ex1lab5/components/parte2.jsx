import React from 'react';
import { StyleSheet, Text, View, AppState, FlatList, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';
import Twok from './twok';

class Twoks {
    constructor(uid, name, tid, text){
        this.uid = uid;
        this.name = name;
        this.tid = tid;
        this.text = text
    }
}

function Parte2() {
    let [twokke, setTwokke] = useState(1);

    twokke = [
        new Twoks(2,"Pippo",1,"Ciao a tutti"),
        new Twoks(2, "Pippo", 2, "Buongiornissimo, Caffè??!?"),
        new Twoks(1, "Paperino", 3, "Buonasera"),
        new Twoks(1, "Paperino", 4, "Che bella giornata"),
        new Twoks(3, "Pluto", 5, "che bello questo TwikTok")];

    const renderItem = ({item}) => (
        <Twok data={item}></Twok>
    )

    console.log(twokke)

    return ( 
        <SafeAreaView>
            <Text>Siamo alla seconda parte</Text>
            <FlatList
            data = {twokke}
            renderItem = {renderItem}
            keyExtractor = {item => item.tid}
            />
        </SafeAreaView>
     );
}

export default Parte2;