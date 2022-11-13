import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import Page1 from './components/page1';
import Lista from './components/lista';


class App extends React.Component {
  state = { page : 0, twoks: [] }

  render() { 
    if(this.state.page == 0){
      return (
    <View style={styles.container}>
      <Page1 setPage1={this.setPage1}></Page1>
      <StatusBar style="auto" />
    </View>
  );
    } else {
      return (
        <View>
          <Lista dati={this.state.twoks} setPage0={this.setPage0}></Lista>
        </View>
      )
    }
    
  }

  setPage0 = () => {
    this.setState({page : 0})
  }


  setPage1 = (twokke) => {
    //console.log('setPage1: ' + twokke)
    this.setState({page : 1})
    this.setState({twoks : twokke})
    //console.log(this.state.page)
    //console.log('setPage1: ' + this.state.twoks)
  }
}


 
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
