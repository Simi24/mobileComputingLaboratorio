class User{
    constructor(uid, picture){
        this.uid = uid;
        this.picture = picture;
    };
    get uid() {
        return this._uid;
    };
    set uid(newUid) {
        if (newUid == "") {
            console.error("Il uid non può essere vuoto");
            return;
        } else {
            this._uid = newUid;
        }
    };

    get picture() {
            return this._picture;
    };

    set picture(newPicture) {
            this._picture = newPicture;
    };

    print = () => {
        if (this.picture == ""){
            console.log(this.uid + " NoProfilePicture");
        } else {
            console.log(this.uid + " WithProfilePicture");
        }
    };
}

let usr1 = new User('Simone', '');
let usr2 = new User('Mattias', 'foto')

usr1.print();
let a = usr1.uid;
console.log(a);
usr2.print();