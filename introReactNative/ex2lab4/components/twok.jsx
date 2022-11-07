import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

class Twok extends React.Component {
    state = {  } 
    render() { 
        return <View>
        <Text >{this.props.data.text}</Text>
        <Text>Scritto da: {this.props.data.name}</Text>
      </View>
    }
}
 
export default Twok;