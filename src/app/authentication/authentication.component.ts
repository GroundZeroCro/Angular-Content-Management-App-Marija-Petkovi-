import {Component} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent {

  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.getUser().pipe(
      take(1)
    ).subscribe(value => {
      if (value != null) {
        router.navigate(['']);
      }
    });
  }

  doLogin() {
    this.authenticationService.login(this.email, this.password).then(() => this.router.navigate(['']));
  }

  onLogout() {
    this.authenticationService.logout();
  }
}
