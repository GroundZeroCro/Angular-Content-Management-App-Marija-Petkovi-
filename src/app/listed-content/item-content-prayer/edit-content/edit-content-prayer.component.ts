import {Component, Input, OnInit} from '@angular/core';
import {PrayerModel} from '../prayer.model';
import {FirebaseService} from '../../firebase.service';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-content-prayer',
  templateUrl: './edit-content-prayer.component.html',
  styleUrls: ['./edit-content-prayer.component.sass']
})
export class EditContentPrayerComponent {

  @Input() itemModel: PrayerModel;

  constructor(private firebaseService: FirebaseService, private snackBar: MatSnackBar) {
    this.itemModel = new PrayerModel();
  }

  onSubmit() {
    this.firebaseService.updateItem(this.itemModel)
      .subscribe(_ => {
        this.itemModel = new PrayerModel();
        this.snackBar.open(successfulSubmitSnackbarMessage, 'Close', {
          duration: 2000,
        });
      });
  }
}
