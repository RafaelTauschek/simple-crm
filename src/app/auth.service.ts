import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  signIn(password:string, email:string) {
    this.afAuth.signInWithEmailAndPassword(password, email).then((userCredential) => {
      const user = userCredential.user;
    }).then(() => {
      this.router.navigate(['/dashboard'])
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
    });
  }

  signUp(password:string, email:string) {
    this.afAuth.createUserWithEmailAndPassword(password, email).then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    }).catch((err) => {
      const errorCode = err.code;
      const errMessage = err.message;
    });
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate([''])
    }).catch((err) => {
      // An error happend
    })
  }
}
