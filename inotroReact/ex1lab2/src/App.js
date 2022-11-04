import React, {Component} from 'react';
import './App.css';

class User{
    constructor(nome, uid, pversion){
      this.nome = nome;
      this.uid = uid;
      this.pversion = pversion;
    }
    print = () => {
      return <p>{"Nome utente: "+ this.nome + "; uid: " + this.uid}</p>
  };
}

let usr = new User("Simone", 1, 0);
let usr1 = new User("Piero", 100, 34);
let usr2 = new User("Mirco", 234, 9834);

class App extends React.Component{
  state = {
    page : 0,
    userToShow : null,
    users : [usr, usr1, usr2],
  }

  render() {
    console.log(this.state.users)
    if (this.state.page === 0) {
      return <div>
      <ul>{this.state.users.map(utente => this.contactRow(utente))}</ul>
      
      </div>;
    } else {
      return <div>
        {this.secondaSchermata(this.state.userToShow)}
      </div>
    }
    
  }

  contactRow(contact){
    return <li key={contact.nome}>
      <h1>{contact.nome}</h1>
      <button onClick={() => this.handleShowData(contact)}>Mostra Dati</button>
    </li>
  }

  handleShowData = (contact) => {
    this.setState({page : 1, userToShow : contact})
  }

  renderPVersion(contact){
    if (contact.pversion == 0) {
      return<h3>L'utente non ha nessuna immagine del profilo</h3>     
    } else {
      return <h3>La versione dell'immagine del profilo è {contact.pversion} </h3> 
    }
  }

  secondaSchermata(contact){
    return <div><h1>{contact.print()}</h1>
    {this.renderPVersion(contact)}
    <button onClick={() => this.handleGoBack(contact)}>Utenti</button>
    </div>; 
  }

  handleGoBack() {
    this.setState({page : 0, userToShow : null})
  }
  
}

export default App;

/*
Ricordiamo la gestione delle pagine, nello stato mettiamo un numero di pagina
poi quando clicca sul bottone chiamiamo un metodo handle che modifica lo stato cambiando il numero di pagina.
In modo che nel render tramite un if controlliamo in che pagina siamo.
Invece di questa porcheria per gli utenti si può creare un istanza di una classe direttamente in un array:
users: [new User(8, "Giovanni", 1), new User(9, "Silvio", 0), new User(10, "Marta", 2)]
*/