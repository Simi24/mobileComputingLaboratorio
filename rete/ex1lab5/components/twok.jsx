import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

class Twok extends React.Component {
    state = {  } 
    render() { 
        console.log(this.props)
        return (
            <View>
                <Text>{this.props.data.text}</Text>
            </View>
        );
    }

}
 
export default Twok;