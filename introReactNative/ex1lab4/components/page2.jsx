import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

class Page2 extends React.Component {
    state = {  } 
    render() { 
        return <SafeAreaView>
            <Text>Questa è la pagina di: {this.props.user.nome}</Text>
        {this.handlePVersion(this.props.user)}
        <Button title='Go Back' onPress={this.handleGoBack}></Button>
        </SafeAreaView>
        
        
    
        
    }

    handlePVersion(user){
        if (user.pversion == 0) {
            return <Text>L'utente non ha nessuna immagine del profilo</Text>
        } else {
            return <Text>La versione dell'immagine del profilo è {user.pversion}</Text>
        }
    }

    handleGoBack = () => {
        console.log('go back premuto')
        this.props.setPage0()
    }
}
 
export default Page2;