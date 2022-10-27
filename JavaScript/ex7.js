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

class VipUser extends User {
    constructor(uid, picture, vipPoints){
        super(uid, picture);
        this.vipPoints = vipPoints;
    }

    print = () => {
        super.print();
        console.log(this.vipPoints);
    }
}

class Model{
    constructor(utenti){
        this.utenti = utenti;
    }

    insert = (uid, picture) => {
        const utente = new User(uid, picture);
        this.utenti.push(utente);
    }

    insertVip = (uid, picture, vipPoints) => {
        const utente = new VipUser(uid, picture, vipPoints);
        this.utenti.push(utente);
    }

    print = () => {
        utenti.utenti.forEach(element => {
            console.log(element.uid, element.picture);
        });
    }

    findUser = (uidUtente) => {
        utenti.utenti.forEach(element => {
            if (uidUtente == element.uid) {
                console.log(uidUtente, element.uid);
                console.log(element);
                return element;
            } else {
                return undefined;
            }
        });
    }
}

let users = new Array;

let utenti = new Model(users);

utenti.insert('Simone', 'Fotuzza');
utenti.insert('Mattias', '');

utenti.insertVip('Filippo', '', 100);

let usr2 = new VipUser('Mattias', 'foto', 12231);
usr2.print;