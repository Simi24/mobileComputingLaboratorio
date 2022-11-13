import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Twok from './twok';

class Lista extends React.Component {
    state = {  } 
    render() { 
        //console.log('siamo in twok: ' + this.props.setPage0)
        return (<View>
            <FlatList
            data={this.props.dati}
            renderItem={({item})=>
            <Twok data={item}></Twok>
            }
            keyExtractor={item => item.tid}
            />
            <Button title='GOBACK' onPress={this.handleGoBack}></Button>
        </View>);
    }

    handleGoBack = () => {
        this.props.setPage0();
    }
}
 
export default Lista;
