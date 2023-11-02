import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService) { }

  logout() {
    this.auth.signOut()
  }
}
