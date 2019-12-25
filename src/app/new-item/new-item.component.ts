import {Component} from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.sass']
})
export class NewItemComponent {

  constructor(public navigationService: NavigationService) {
  }
}
