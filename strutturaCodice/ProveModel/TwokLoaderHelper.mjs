import CommunicationController from "./CC.mjs";
import Twok from "./twok.mjs";

export default class TwokLoaderHelper{
    
    async createList() {
        let listaTwok = []
        for (let i = 1; i < 5; i++) {
            console.log('faccio la richiesta numero: ' + i)
            await CommunicationController.getTwok('Q3JLoN55z1H8u8ZI8SQF', i)
            .then(result => {
                console.log('ho il risultato: ' + result.tid)
                let twok = new Twok(result.uid, result.name, result.pversion, result.tid, result.text)
                listaTwok.push(twok)})
            .catch(error => console.log('Error: ' + error)) 
            //console.log('iterazione: ' + i + lista)
        }

        //console.log(lista)

        return listaTwok
    }

}

let prova = new TwokLoaderHelper();

prova.createList()
.then(result => console.log(result))



