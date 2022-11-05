import React from 'react';
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
      } 

    render() { 
        return <div>
      <ul>{this.state.users.map(user => <Contact key={user.uid} data={user} handleShowData={() => this.handleShowData(user)}></Contact>)}</ul>
    </div>;
    }

    handleShowData = (user) => {
        console.log("bottone schiacciato")
        console.log(user.print())
        this.props.setPage1(user);
    }
}
 
export default Page1; 