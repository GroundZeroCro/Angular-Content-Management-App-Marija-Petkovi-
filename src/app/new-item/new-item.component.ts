import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.sass']
})
export class NewItemComponent implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  }

}
