import React from 'react';
import { StyleSheet, Text, View, AppState, FlatList, Button, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';
import Contact from './contact';

class User{
    constructor(uid, nome, pversion){
        this.uid = uid;
        this.nome = nome;
        this.pversion = pversion;
    }
}

function Page1(props) {
    let [users, setUser] = useState(1);

    users = [new User(8, 'Giovanni', 1), new User(9, 'Silvio', 0), new User(10, 'Marta', 2),]

    function handleShowData (user) {
        console.log(props.setPage1)
       console.log(user)
        props.setPage1(user)
    }

    const renderItem = ({item}) => (
        <Contact data={item} handleShowData={() => handleShowData(item)}></Contact>
    )

        return (
            <SafeAreaView>
                <FlatList
                    data = {users}
                    renderItem={renderItem}
                    keyExtractor={item => item.uid}
                />
        </SafeAreaView>
        )

    
}



export default Page1;