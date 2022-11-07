import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import Page2 from './page2';
import Page1 from './page1';

class Parte1 extends React.Component {
    state = {  
        page : 0,
        userToShow : null
    }

    render(){
        if (this.state.page == 0) {
          return <SafeAreaView>
        <Page1 setPage1={(this.setPage1)}></Page1>
        <StatusBar style="auto"></StatusBar>
        </SafeAreaView>
        } else {
          return <SafeAreaView>
            <Page2 user={this.state.userToShow} setPage0={this.setPage0}></Page2>
          </SafeAreaView>
        }
        
    
      } 
    
    setPage1 = (user) => {
      this.setState({page : 1, userToShow : user})
      console.log(this.state.page)
    }
    
    setPage0 = () => {
      this.setState({page : 0, userToShow : null})
    }
    
}
 
export default Parte1;