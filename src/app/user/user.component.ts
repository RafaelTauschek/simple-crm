import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  users: any = [];
  unsubUsers:any;

  constructor(private dialog: MatDialog, private firebase: Firestore) {}


  ngOnInit(): void {
    this.unsubUsers = onSnapshot(this.getUserReference('users'), (list) => {
      list.forEach((element) => {
        this.users.push(element.data())
      });
    });
  }


  ngOnDestroy() {
    this.unsubUsers;
  }


  getUserReference(colId: string) {
    return collection(this.firebase, colId);
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
