import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import Contact from './contact';


class User{
    constructor(uid, nome, pversion){
      this.uid = uid;
      this.nome = nome;
      this.pversion = pversion;
    }
    print = () => {
      return <p>{"Nome utente: "+ this.nome + "; uid: " + this.uid}</p>
  };
  }


    
class Page1 extends React.Component {
  
    state = { 
        users : [new User(8, "Giovanni", 1), new User(9, "Silvio", 0), new User(10, "Marta", 2)]
      } ;

    render() { 
        console.log(this.state.users);
        return <SafeAreaView>
      <FlatList
        data={this.state.users}
        renderItem={({item}) =>
        <Contact title={item.nome} handleShowData={() => this.handleShowData(item)} data={item} />
      }
        keyExtractor={item => item.uid}
    />
    </SafeAreaView>
    
    }

    

    handleShowData = (user) => {
        console.log("bottone schiacciato")
        console.log(user.print())
        console.log(user.pversion)
        this.props.setPage1(user);
    }

    
}


  
 
export default Page1;