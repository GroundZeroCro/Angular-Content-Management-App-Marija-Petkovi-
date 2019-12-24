import {Component} from '@angular/core';
import {FirebaseService} from './firebase.service';
import {NavigationService} from '../navigation/navigation.service';

@Component({
  selector: 'app-listed-content',
  templateUrl: './listed-content.component.html',
  styleUrls: ['./listed-content.component.sass']
})
export class ListedContentComponent {

  constructor(public firebaseService: FirebaseService, public navigationService: NavigationService) {
  }
}
