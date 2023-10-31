import { Component, OnInit } from '@angular/core';
import { Firestore, collection, onSnapshot, doc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  subUser: any;
  user: User = new User();

  constructor(private route: ActivatedRoute, private firebase: Firestore) { }

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
    this.subUser = onSnapshot(this.getUserReference(), (user:any) => {
      const data = user.data();
      this.user = new User(data);
    });
  }


  getUserReference() {
    return doc(collection(this.firebase, 'users'), this.userId)
  }


  editUserDetail() {

  }

  editMenu() {

  }
}
