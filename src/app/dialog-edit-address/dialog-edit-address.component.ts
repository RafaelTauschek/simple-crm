import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { Firestore, doc, collection, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  user!: User;
  loading: boolean = false;
  userId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firebase: Firestore) {

  }

  ngOnInit(): void {
    console.log(this.user);
  }

  saveUser() {
    this.loading = true;  
    this.updateUser().then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }


  async updateUser() {
    updateDoc(this.getUserReference(), this.user.toJSON());
  }


  getUserReference() {
    return doc(collection(this.firebase, 'users'), this.userId)
  }
}
