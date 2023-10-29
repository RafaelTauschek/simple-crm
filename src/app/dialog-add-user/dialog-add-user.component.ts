import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { FirebaseService } from '../firebase.service';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;


  constructor(private firebase: FirebaseService){

  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    this.firebase.addUser(this.user.toJSON());
  }
}
