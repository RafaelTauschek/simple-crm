import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { updateProfile, getAuth, onAuthStateChanged } from "firebase/auth";
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: any;


  constructor(private auth: AuthService) {
    console.log(this.user);
    
  }


  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        console.log('User is signed in');
      } else {
        console.log('User is singed out');
      }
      console.log(this.user);  
    });
  }

  getUser() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user is signed in');
        const uid = user.uid;
      } else {
        console.log('user is singed out');
      }
    })
  }
}
