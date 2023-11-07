import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { updateProfile, User } from "firebase/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  authState: Observable<any | null>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.authState = afAuth.authState;
  }


  signIn(password: string, email: string) {
    this.afAuth.signInWithEmailAndPassword(password, email).then((userCredential) => {
      const user = userCredential.user;
      this.user = user;
    }).then(() => {
      this.router.navigate(['/dashboard'])
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.warn(errorCode, errorMessage);
    });
  }

  signUp(password: string, email: string) {
    this.afAuth.createUserWithEmailAndPassword(password, email).then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.warn(errorCode, errorMessage);
    });
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate([''])
    }).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.warn(errorCode, errorMessage);
    })
  }
}
