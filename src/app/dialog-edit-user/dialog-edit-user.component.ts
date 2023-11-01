import { Component, OnInit } from '@angular/core';
import { Firestore, doc, collection, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user!: User;
  loading: boolean = false;
  birthDate!: Date;
  userId: string = '';

  constructor(private firebase: Firestore, public dialogRef: MatDialogRef<DialogEditUserComponent> ) {}

  ngOnInit(): void {
console.log(this.user.birthDate);

    
    
    
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    this.updateUser().then(() => {
      this.loading = false;
      console.log(this.user);
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
