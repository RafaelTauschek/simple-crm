import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firebase: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}


  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    this.addUser();
    this.dialogRef.close();
  }


  async addUser() {
    await addDoc(this.getUserReference('users'), this.user.toJSON()).catch(
      (err) => {
        console.log(err);
      }
    )
  }


  getUserReference(colId: string) {
    return collection(this.firebase, colId);
  }

}
