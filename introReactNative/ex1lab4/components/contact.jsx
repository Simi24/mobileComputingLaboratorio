import React from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

class Contact extends React.Component {
    
    render() { 
        return <View>
        <Text >{this.props.data.nome}</Text>
        <Button title="Prova" onPress={() => this.props.handleShowData(this.props.data)}></Button>
      </View>
    }
}
 
export default Contact;