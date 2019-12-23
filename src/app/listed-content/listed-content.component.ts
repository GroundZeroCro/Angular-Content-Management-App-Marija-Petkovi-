import {Component} from '@angular/core';
import {FirebaseService} from './firebase.service';

@Component({
  selector: 'app-listed-content',
  templateUrl: './listed-content.component.html',
  styleUrls: ['./listed-content.component.sass']
})
export class ListedContentComponent {

  constructor(public firebaseService: FirebaseService) {
  }
}
