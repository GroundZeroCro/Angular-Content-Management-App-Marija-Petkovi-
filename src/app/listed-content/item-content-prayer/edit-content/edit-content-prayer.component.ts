import {Component, Input, OnInit} from '@angular/core';
import {PrayerModel} from '../prayer.model';
import {FirebaseService} from '../../firebase.service';

@Component({
  selector: 'app-edit-content-prayer',
  templateUrl: './edit-content-prayer.component.html',
  styleUrls: ['./edit-content-prayer.component.sass']
})
export class EditContentPrayerComponent implements OnInit {

  @Input() itemModel: PrayerModel;

  constructor(private firebaseService: FirebaseService) {
    this.itemModel = new PrayerModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.firebaseService.updateItem(this.itemModel)
      .subscribe(value => console.log(value));
  }
}
