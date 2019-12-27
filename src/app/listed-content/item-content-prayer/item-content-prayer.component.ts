import {Component, Input} from '@angular/core';
import {PrayerModel} from './prayer.model';
import {FirebaseService} from '../firebase.service';
import ItemContentFirebase from '../shared/ItemContentFirebase';

@Component({
  selector: 'app-item-content-prayer',
  templateUrl: './item-content-prayer.component.html',
  styleUrls: ['./item-content-prayer.component.sass']
})
export class ItemContentPrayerComponent extends ItemContentFirebase {

  @Input() prayerModel: PrayerModel;

  constructor(firebaseService: FirebaseService) {
    super(firebaseService);
  }
}
