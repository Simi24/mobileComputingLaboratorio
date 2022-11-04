import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    page: 0, // pagina 0 -> homepage, pagina 1 -> pagina utente
    userToShow: null, // user da mostrare nella pagina 1
    posts:[
      {"uid":8,"name":"Test1","pversion":0},
      {"uid":2,"name":"Sergio","pversion":4},
      {"uid":14,"name":"Obi Wan Kenobi","pversion":1},
      {"uid":13,"name":"Anakin Skywalker","pversion":0}
    ]
  }

  render() {
    if(this.state.page == 0) {
      return <div>
        <h1>Homepage</h1>
        <ul>{this.state.posts.map(post => this.userRow(post))}</ul>
      </div>
    }
    else { // altrimenti è pagina 1 
      return <div>
          <h1>Pagina Utente</h1>
          <h2>Name: {this.state.userToShow.name}</h2>
          <h2>UID: {this.state.userToShow.uid}</h2>
          {this.showPic(this.state.userToShow.pversion)}
          <button onClick={() => this.handleBack()}>Go Back</button>
        </div>
    }
  }

  userRow(user) {
    return <li key={user.uid}>
      <h3>{user.name}</h3>
      <button onClick={() => this.handleOpenUser(user)}>Open</button>
    </li>
  }

  handleOpenUser(userToShow) {
    this.setState({page:1, userToShow: userToShow})
  }

  handleBack() {
    this.setState({page:0, userToShow: null})
  }

  showPic(pversion) {
    if(pversion === 0) {
      return <h2>L'utente non ha nessuna immagine del profilo</h2>
    }
    else {
      return <h2>La versione dell'immagine di profilo è {pversion}</h2>
    }
  }
}

export default App;
