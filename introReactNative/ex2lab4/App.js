import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Parte1 from './components/parte1';
import Parte2 from './components/parte2';

class App extends React.Component {
  state = {  
    parte : 0
  } 

  render() {
    if (this.state.parte == 0){
      return <View style={styles.container}>
      <Text>La nostra maggica Applicazione Mobile</Text>
      <Button title='Parte 1' onPress={() => this.handleParte1()}></Button>
      <Button title='Parte 2' onPress={() => this.handleParte2()}></Button>
      <StatusBar style="auto" />
    </View>;
    } else if(this.state.parte == 1) {
      return<View>
      <Button title='HomePage' onPress={() => this.handleHomePage()}></Button>
      <Button title='Parte 2' onPress={() => this.handleParte2()}></Button>
      <Parte1></Parte1>
      </View> 
    } else {
      return <View>
        <Button title='HomePage' onPress={() => this.handleHomePage()}></Button>
        <Button title='Parte 1' onPress={() => this.handleParte1()}></Button>
        <Text>Parte 2</Text>
        <Parte2></Parte2>
      </View>
    }
   
  }

  handleHomePage() {
    this.setState({parte : 0})
  }

  handleParte1(){
    this.setState({parte : 1})
  }

  handleParte2(){
    this.setState({parte : 2})
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
