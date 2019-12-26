import {Component, Input} from '@angular/core';
import {PrayerModel} from '../prayer.model';
import {FirebaseService} from '../../firebase.service';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';
import {MatSnackBar} from '@angular/material';
import {SegmentedModel} from '../segmented.model';
import {NgForm} from '@angular/forms';

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

  addSegmentedToList(segmentedForm: NgForm) {
    console.log(segmentedForm.valid);
    if (segmentedForm.valid) {
      this.itemModel.segmentedList.push(new SegmentedModel(
        segmentedForm.controls.segmentedTitle.value,
        segmentedForm.controls.segmentedText.value
      ));
    } else {
      console.log('Segmented form not valid');
    }
    console.log(segmentedForm.controls.segmentedTitle.value);
    console.log(segmentedForm.controls.segmentedText.value);
    segmentedForm.resetForm();
  }

  onRemoveSegmentedItem($event: SegmentedModel) {
    this.itemModel.segmentedList = this.itemModel.segmentedList.filter(value => {
      console.log(`Value: ${value.itemId}     ${$event.itemId}`);
      return value.itemId !== $event.itemId;
    });
  }
}
