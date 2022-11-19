import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import Twok from './twok';
import CommunicationController from '../model/CC';

import TwokLoaderHelper from '../model/TwokLoeaderHelper';

export default function Lista(props) {

    let [loaded, setLoaded] = useState(false)
    let [twoks, setTwoks] = useState(null)

    console.log(loaded, twoks)

    const sid = 'o0tLqcmkJ3E58qjbsW6L'
    
    useEffect(() => {handleRquest()}, []);

    const handleGoBack = () => {
        props.setPage0();
    }

    async function handleRquest(){
        console.log(loaded, twoks)
        let Prova = new TwokLoaderHelper();
        await Prova.createList()
        .then(result => {setTwoks(twoks = result), setLoaded(true)})
         
    }

    

    if(loaded == false) {
        return(
            <View>
                <Text>Sta Caricando</Text>
                <ActivityIndicator size={"large"}/>
            </View>
        )
    } else {
        return (<View>
            <FlatList
            data={twoks}
            renderItem={({item})=>
            <Twok data={item}></Twok>
            }
            keyExtractor={item => item.tid}
            />
            <Button title='GOBACK' onPress={handleGoBack}></Button>
        </View>);
    }

}
    

        

        //console.log('siamo in twok: ' + this.props.dati)
        /*return (<View>
            <FlatList
            data={props.dati}
            renderItem={({item})=>
            <Twok data={item}></Twok>
            }
            keyExtractor={item => item.tid}
            />
            <Button title='GOBACK' onPress={handleGoBack}></Button>
        </View>);*/
    

    

 
