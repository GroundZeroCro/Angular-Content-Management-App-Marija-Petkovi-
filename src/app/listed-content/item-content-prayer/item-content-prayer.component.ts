import {Component, Input} from '@angular/core';
import {PrayerModel} from './prayer.model';
import {FirebaseService} from '../firebase.service';
import ItemContentFirebase from '../shared/item-content-firebase';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-item-content-prayer',
  templateUrl: './item-content-prayer.component.html',
  styleUrls: ['./item-content-prayer.component.sass']
})
export class ItemContentPrayerComponent extends ItemContentFirebase {

  @Input() prayerModel: PrayerModel;

  constructor(firebaseService: FirebaseService, dialog: MatDialog) {
    super(firebaseService, dialog);
  }
}
