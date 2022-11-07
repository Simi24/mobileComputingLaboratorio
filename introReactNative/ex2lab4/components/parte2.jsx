import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import Twok from './twok';

class Twoks {
    constructor(uid, name, tid, text){
        this.uid = uid;
        this.name = name;
        this.tid = tid;
        this.text = text;
    }
}

class Parte2 extends React.Component {
    state = {twoks : [
        new Twoks(2,"Pippo",1,"Ciao a tutti"),
        new Twoks(2, "Pippo", 2, "Buongiornissimo, Caffè??!?"),
        new Twoks(1, "Paperino", 3, "Buonasera"),
        new Twoks(1, "Paperino", 4, "Che bella giornata"),
        new Twoks(3, "Pluto", 5, "che bello questo TwikTok")]
        }; 
        
        
    render() { 
        return <SafeAreaView>
        <FlatList
          data={this.state.twoks}
          renderItem={({item}) =>
          <Twok title={item.name} handleShowData={() => this.handleShowData(item)} data={item} />
        }
          keyExtractor={item => item.tid}
      />
      </SafeAreaView>
    }
}
 
export default Parte2;