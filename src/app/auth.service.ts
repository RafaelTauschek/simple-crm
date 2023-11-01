import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = {
    email: '',
    password: ''
  }

  constructor(private afAuth: AngularFireAuth) { }


  signIn() {
    this.afAuth.signInWithEmailAndPassword(this.user.password, this.user.email).then((userCredential) => {
      //Signed in
      const user = userCredential.user;
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
    });
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.user.password, this.user.email).then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    }).catch((err) => {
      const errorCode = err.code;
      const errMessage = err.message;
    });
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      //Sign out successful
    }).catch((err) => {
      // An error happend
    })
  }
}
