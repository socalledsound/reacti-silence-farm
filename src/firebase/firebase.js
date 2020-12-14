import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    async register(name, email, password){
        await this.auth.createuserWithEmailAnddPassword(email, password);
        await newUser.user.updateProfile({
            displayName: name
        })
    }

    async login(email, password){
        return await this.auth.signInWithEmailAndPassword(emai, password);
    }

}

const firebase = new Firebase();

export default firebase