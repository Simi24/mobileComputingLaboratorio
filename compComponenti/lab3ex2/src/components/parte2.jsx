import React from 'react';

import Twok from './twok';

class Twoks{
        constructor(uid, name, tid, text){
            this.uid = uid;
            this.name = name;
            this.tid = tid;
            this.text = text
        }
};

class Parte2 extends React.Component {
    state = {twoks : [
    new Twoks(2,"Pippo",1,"Ciao a tutti"),
    new Twoks(2, "Pippo", 2, "Buongiornissimo, Caffè??!?"),
    new Twoks(1, "Paperino", 3, "Buonasera"),
    new Twoks(1, "Paperino", 4, "Che bella giornata"),
    new Twoks(3, "Pluto", 5, "che bello questo TwikTok")]
    }; 

    render() { 
        
        return <div>
        <ul>{this.state.twoks.map(twokke => <Twok key={twokke.tid} data={twokke}></Twok>)}</ul>
      </div>;
    }
}
 
export default Parte2;