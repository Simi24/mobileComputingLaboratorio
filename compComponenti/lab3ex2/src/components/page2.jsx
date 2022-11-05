import React from 'react';

class Page2 extends React.Component {
    state = {  } 
    render() {
        //console.log(this.props.user.name) 
        return <div>
            <h1>Pagina personale di {this.props.user.nome}</h1>
            {this.handlePVersion(this.props.user)}
            <button onClick={() => this.handleGoBack()}>Utenti</button>
        </div>;
    }

    handlePVersion(user){
        if (user.pversion == 0){
            return <h3>L'utente non ha nessuna immagine del profilo</h3>
        } else {
            return <h3>La versione dell'immagine del profilo è {user.pversion}</h3>
        }
    }

    handleGoBack(){
        this.props.setPage0()
    }
}
 
export default Page2;