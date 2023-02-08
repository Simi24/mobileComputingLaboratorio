import fetch from "node-fetch";

export default class CommunicationController {
    static BASE_URL = 'https://develop.ewlab.di.unimi.it/mc/twittok/'

    static async tiktwokRequest(endpoint, parameters) {
        //console.log(parameters);
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

    static async getProfile(sid){
        const endpoint = 'getProfile';
        const parameter = {sid: sid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async setProfile(sid, name, picture){
        const endpoint = 'setProfile';
        const parameter = {sid: sid, name: name, picture: picture}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async getTwok(sid, uid, tid){
        const endpoint = 'getTwok';
        let parameter = null;
        if(uid == null){
            parameter = {sid: sid, tid: tid}
        } else {
           parameter = {sid: sid, uid: uid, tid: tid} 
        }
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async addTwok(sid, text, bgcol, fontcol, fontsize, fonttype, halign, valign, lat, lon){
        console.log('stampo il sid', sid)
        const endpoint = 'addTwok';
        const parameter = {sid: sid, text: text, bgcol: bgcol, fontcol: fontcol, fontsize: fontsize, fonttype: fonttype, halign: halign, valign: valign, lat: lat, lon: lon}
        //console.log(parameter)
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async getPicture(sid, uid){
        const endpoint = 'getPicture';
        const parameter = {sid: sid, uid: uid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async follow(sid, uid){
        const endpoint = 'follow';
        const parameter = {sid: sid, uid: uid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async unfollow(sid, uid){
        const endpoint = 'unfollow';
        const parameter = {sid: sid, uid: uid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async getFollowed(sid){
        const endpoint = 'getFollowed';
        const parameter = {sid: sid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }

    static async isFollowed(sid, uid){
        const endpoint = 'isFollowed';
        const parameter = {sid: sid, uid: uid}
        return await CommunicationController.tiktwokRequest(endpoint, parameter)
    }
}

const sid = "cRhp7bW0fRDfYUfh0p02"
const text = "testo di prova"
const bgcol = "FFFFFF"
const fontcol = "000000"
const fontsize = "1"
const fonttype = "1"
const halign = "1"
const valign = "1"
const lat = null
const lon = null
console.log(sid)



CommunicationController.addTwok(sid, text, bgcol, fontcol, parseInt(fontsize), parseInt(fonttype), parseInt(halign), parseInt(valign), lat, lon)
.then(r => console.log('Twok aggiunto correttamente'))
.catch(e => console.log(e))