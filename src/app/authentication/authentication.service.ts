import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authentication: AngularFireAuth) {
  }

  login(email: string, password: string): Promise<UserCredential> {
    return this.authentication.auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.authentication.auth.signOut();
  }

  getUser(): Observable<User> {
    return this.authentication.user;
  }
}
