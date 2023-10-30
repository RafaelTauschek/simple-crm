import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { FirebaseService } from '../firebase.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firebase: FirebaseService, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    this.firebase.addUser(this.user.toJSON()).then((result: any) => {
      this.loading = false;
      console.log('Adding was finished', result);
      this.dialogRef.close()
    })
  }
}
