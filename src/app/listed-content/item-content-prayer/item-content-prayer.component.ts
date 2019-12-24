import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../item.model';
import {PrayerModel} from './prayer.model';

@Component({
  selector: 'app-item-content-prayer',
  templateUrl: './item-content-prayer.component.html',
  styleUrls: ['./item-content-prayer.component.sass']
})
export class ItemContentPrayerComponent {

  @Input() prayerModel: PrayerModel;

  panelOpenState = false;
  isEditMode = false;

  constructor() {
    console.log('prayers');
  }

  changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
