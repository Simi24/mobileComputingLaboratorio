import React from 'react';

import Parte1 from './components/parte1';

import Parte2 from './components/parte2';

class App extends React.Component {
  state = {
      parte : 0,
      userToShow : null
  };

  render() { 
    if(this.state.parte == 0){
      return <div>
        <h1>Scegli che funzionalità vuoi vedere</h1>
        <button onClick={() => this.handleParte1()}>Parte 1</button>
        <button onClick={() => this.handleParte2()}>Parte 2</button></div>
    } else if (this.state.parte == 1){
      return <div><button onClick={() => this.handleHomePage()}>HomePage</button>
    <button onClick={() => this.handleParte2()}>Parte 2</button>
    <Parte1></Parte1>
    </div>
    }
    return <div><button onClick={() => this.handleHomePage()}>HomePage</button>
    <button onClick={() => this.handleParte1()}>Parte 1</button>
    <Parte2></Parte2>
    </div>
    
  }

  

  handleHomePage(){
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
