import fetch from "node-fetch";

export default class register{

    async register() {

    const BASE_URL = 'https://develop.ewlab.di.unimi.it/mc/twittok/register';
        
        const url = this.BASE_URL;
        let httpResponse = await fetch(BASE_URL,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
        });
        const status = httpResponse.status;
        if(status == 200){
            let deserializedObject = await httpResponse.json();
            return deserializedObject;
        } else {
            let error = new Error("Error message from the server. HTTP status: " + status);
            throw error;
        }
    }
}

let prova = new register();

prova.register()
.then(result => console.log(result))