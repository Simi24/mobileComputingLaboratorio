import React, {Component, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Image} from 'react-native';

function Twok(props) {
    var twok = props.data
    const sid = 'o0tLqcmkJ3E58qjbsW6L'
    const [image, setImage] = useState(null)


    useEffect(() => {getPicture(sid, twok.uid)}, []);

    async function getPicture(sid, uid) {
        
        const URL = 'https://develop.ewlab.di.unimi.it/mc/twittok/getPicture'
        const res1 = await fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                sid: sid,
                uid: uid
            })
        });

        
        const image1 = await res1.json()
        //console.log(image1.picture)
        let immagine = image1.picture
        setImage(immagine)

        return image1
    }

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
 
export default Twok;