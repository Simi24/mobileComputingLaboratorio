import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';

import Page1 from './components/page1';
import Page2 from './components/page2';


class App extends React.Component {

  state ={
    page : 0,
    userToShow : null
  };
  

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




export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
