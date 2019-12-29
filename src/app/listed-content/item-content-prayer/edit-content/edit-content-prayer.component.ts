import {Component, Input} from '@angular/core';
import {PrayerModel} from '../prayer.model';
import {FirebaseService} from '../../firebase.service';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';
import {MatDialog, MatSelect, MatSnackBar} from '@angular/material';
import {SegmentedModel} from '../segmented.model';
import {NgForm} from '@angular/forms';
import {UUID} from 'angular2-uuid';
import {FirebaseMedium} from '../../firebase.medium';
import {FirebaseCallback} from '../../firebase.callback';

@Component({
  selector: 'app-edit-content-prayer',
  templateUrl: './edit-content-prayer.component.html',
  styleUrls: ['./edit-content-prayer.component.sass']
})
export class EditContentPrayerComponent {

  @Input() itemModel: PrayerModel;
  private firebaseMedium: FirebaseMedium;
  private readonly firebaseCallback: FirebaseCallback;

  constructor(
    private firebaseService: FirebaseService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.initiateModel();
    this.firebaseMedium = new FirebaseMedium(firebaseService, dialog);
    const fieldMemberHandle = this;

    this.firebaseCallback = {
      onSuccess() {
        snackBar.open(successfulSubmitSnackbarMessage, 'Close', {
          duration: 2000,
        });
        fieldMemberHandle.initiateModel();
      },
      onError() {
      }
    } as FirebaseCallback;
  }

  onSubmit() {
    this.firebaseMedium.onSubmit(this.itemModel, this.firebaseCallback);
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
    segmentedForm.resetForm();
  }

  onRemoveSegmentedItem($event: SegmentedModel) {
    this.itemModel.segmentedList = this.itemModel.segmentedList.filter(value => {
      return value.itemId !== $event.itemId;
    });
  }

  changePrayerType(prayerTypeSelect: MatSelect) {
    this.itemModel.type = prayerTypeSelect.value;
  }

  private initiateModel() {
    this.itemModel = new PrayerModel();
  }
}
