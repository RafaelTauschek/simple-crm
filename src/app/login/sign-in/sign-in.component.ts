import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide: boolean = true;
  user = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthService, private router: ActivatedRoute) {}


  login() {
    this.auth.signIn(this.user.email, this.user.password);
  }

  guestLogin() {
    this.auth.signIn('guest@test.de', 'testaccount');
  }

}
