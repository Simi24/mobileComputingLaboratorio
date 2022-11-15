import React, {Component, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Image, ActivityIndicator} from 'react-native';
import CommunicationController from '../model/CC';

function Twok(props) {
    var twok = props.data
    
    
    const sid = 'o0tLqcmkJ3E58qjbsW6L'
    const [image, setImage] = useState(null)
    const [loeaded, setLoaded] = useState(false)

    console.log(loeaded)
    useEffect(() => {getPicture(sid, twok.uid)}, []);

    async function getPicture(sid, uid) {
        await CommunicationController.getPicture(sid, uid)
        .then(result=> setImage(result.picture), setLoaded(true))
    }

    if(loeaded == false) {
        return (
            <View>
                <ActivityIndicator size={"small"}/>
            </View>
        )
    } else{
        return (
            <View>
                <Text>{twok.text}</Text>
                <Image
                source={{uri:
                'data:image/png;base64,' + (image)}} style={{width: 100, height:50, resizeMode: 'contain'}}
                />
                
            </View>
        );
    }
        

}
 
export default Twok;