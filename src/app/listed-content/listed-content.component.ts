import {Component} from '@angular/core';
import {FirebaseService} from './firebase.service';
import {NavigationService} from '../navigation/navigation.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-listed-content',
  templateUrl: './listed-content.component.html',
  styleUrls: ['./listed-content.component.sass']
})
export class ListedContentComponent {

  constructor(
    public firebaseService: FirebaseService,
    public navigationService: NavigationService
  ) {
    navigationService.currentListSize$ = firebaseService.data$.pipe(
      map(value => value.length)
    );
  }
}
