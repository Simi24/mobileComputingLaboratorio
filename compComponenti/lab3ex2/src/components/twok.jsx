import React from 'react';

class Twok extends React.Component {
 
    render() { 
        //console.log(this.props)
        return <li>
            <h1>{this.props.data.text}</h1>
            <h3>Scritto da: {this.props.data.name}</h3>
        </li>
    }
}
 
export default Twok;