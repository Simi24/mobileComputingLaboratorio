import React from 'react';


class Contact extends React.Component {
    
    render() { 
        //console.log(this.props)
        return <li>
            <h1>{this.props.data.nome}</h1>
            <button onClick={() => this.props.handleShowData(this.props.data)}>Mostra Dati</button>
        </li>
    }
}
 
export default Contact;