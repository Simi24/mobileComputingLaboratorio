export default class CommunicationController {
    static BASE_URL = 'https://develop.ewlab.di.unimi.it/mc/twittok/'

    static async tiktwokRequest(endpoint, parameters) {
        console.log("sendig request to " + endpoint);
        const url = this.BASE_URL + endpoint;
        let httpResponse = await fetch(url,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parameters)
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

    static async register(){
        const endpoint = 'register';
        const parameter = {};
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async getTwok(sid, tid){
        const endpoint = 'getTwok';
        const parameter = {sid: sid, tid: tid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async getPicture(sid, uid){
        const endpoint = 'getPicture';
        const parameter = {sid: sid, uid: uid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }
}