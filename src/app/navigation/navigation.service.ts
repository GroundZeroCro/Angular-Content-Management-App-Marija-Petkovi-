import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  listedContentSubject = new BehaviorSubject('');
}
