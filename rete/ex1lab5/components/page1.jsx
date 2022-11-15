import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Lista from './lista';


class Page1 extends React.Component {
    state = { sid : 'o0tLqcmkJ3E58qjbsW6L',
                twoks : [],
                images : []
            }
    render() { 
        //console.log('La lista di twok: '+ this.state.twoks)
        
        return (<View>{this.handleRequestImage()}<Button title='Premi per fare la richiesta' onPress={this.handleRquest}></Button></View>);
    }

    async getTwok() {
        //console.log('scarico il primo twok')
        const URL = 'https://develop.ewlab.di.unimi.it/mc/twittok/getTwok'
        const res1 = await fetch(URL, {
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                sid : this.state.sid,
                tid : 1
            })
        })

        const twok1 = await res1.json()

        //console.log(twok1)

        //console.log('Scarico il secondo twok')
        const res2 = await fetch(URL, {
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                sid : this.state.sid,
                tid : 2
            })
        })

        const twok2 = await res2.json()
        //console.log(twok2)

        //console.log('Scarico il terzo twok')
        const res3 = await fetch(URL, {
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                sid : this.state.sid,
                tid : 3
            })
        })

        const twok3 = await res3.json()
        //console.log(twok3)

        const res4 = await fetch(URL, {
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                sid : this.state.sid,
                tid : 4
            })
        })

        const twok4 = await res4.json()

        this.state.twoks.push(twok1)
        this.state.twoks.push(twok2)
        this.state.twoks.push(twok3)
        this.state.twoks.push(twok4)

        //console.log(this.state.twoks)

        //this.setState({twoks : [(twok1), (twok2), (twok3)]})
        return
    }

    handleRquest = () => {
        //console.log('sto per fare una chiamata asincrona')
        this.getTwok()
        .then(result => this.props.setPage1(this.state.twoks))
        .catch(error => console.log('errore'))
        
    }
}


 
export default Page1;