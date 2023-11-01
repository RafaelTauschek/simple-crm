import { Component, OnInit } from '@angular/core';
import { Firestore, collection, onSnapshot, doc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  subUser: any;
  user: User = new User();

  constructor(private route: ActivatedRoute,
    private firebase: Firestore,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
  }

  ngOnDestroy(): void {
    this.subUser;
  }

  getUser() {
    this.subUser = onSnapshot(this.getUserReference(), (user: any) => {
      const data = user.data();
      this.user = new User(data);
    });
  }


  getUserReference() {
    return doc(collection(this.firebase, 'users'), this.userId)
  }


  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
