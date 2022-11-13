import React from 'react';
import { StyleSheet, Text, View, AppState, FlatList, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Contact from './contact';

class User{
    constructor(uid, nome, pversion){
        this.uid = uid;
        this.nome = nome;
        this.pversion = pversion;
    }
}


function Parte1() {
    let [page, setPage] = useState(0);
    let [userToShow, setUserToShow] = useState(null);
    
    function setPage1 (user) {
            console.log(page)
            console.log(user)
            setUserToShow(userToShow = user);
            setPage(page = 1)
            console.log('bottone schiacciato')
            console.log(userToShow)
    }
    

    function setPage0 (){
        setUserToShow(userToShow = null)
        setPage(page = 0)
    }

    if(page == 0) {
        return (
            <SafeAreaView>
                <Page1 setPage1={setPage1}></Page1>
        </SafeAreaView>
        )
    } else if(page == 1){
        return(
        <SafeAreaView>
               <Page2 user ={userToShow} setPage0 = {setPage0}></Page2> 
        </SafeAreaView>
        )
    }
}


export default Parte1;