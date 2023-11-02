import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide : boolean = true;
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  }


  constructor(private auth: AuthService) {}

  register() {
    if (this.user.password === this.user.confirmPassword) {
      this.auth.signUp(this.user.email, this.user.password)
    } else {
      console.log('Password didnt match');
    }
  }
}
