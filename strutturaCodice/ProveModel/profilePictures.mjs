import CommunicationController from "./CC.mjs";

export default class ProfilePictures{
    

    async addUserPicture(sid, uid) {
        let usersPictures = {};
       
            await CommunicationController.getPicture(sid, uid)
            .then(result => usersPictures = {[uid] : result.picture})
    

        
        return usersPictures
    }
}
//
let pp = new ProfilePictures();

pp.addUserPicture("cRhp7bW0fRDfYUfh0p02", 25)
.then(result => console.log(result))