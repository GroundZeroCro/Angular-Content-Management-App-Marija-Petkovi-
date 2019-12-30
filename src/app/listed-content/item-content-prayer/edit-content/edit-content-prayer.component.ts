import {Component, Input} from '@angular/core';
import {PrayerModel} from '../prayer.model';
import {FirebaseService} from '../../firebase.service';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';
import {MatDialog, MatSelect, MatSnackBar} from '@angular/material';
import {SegmentedModel} from '../segmented.model';
import {NgForm} from '@angular/forms';
import {FirebaseCallback} from '../../firebase.callback';
import {EditContentFirebase} from '../../shared/edit-content-firebase';

@Component({
  selector: 'app-edit-content-prayer',
  templateUrl: './edit-content-prayer.component.html',
  styleUrls: ['./edit-content-prayer.component.sass']
})
export class EditContentPrayerComponent extends EditContentFirebase {

  @Input() itemModel: PrayerModel;
  private readonly firebaseCallback: FirebaseCallback;

  constructor(
    firebaseService: FirebaseService,
    private snackBar: MatSnackBar,
    dialog: MatDialog
  ) {
    super(firebaseService, dialog);
    this.initiateModel();
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

  onSubmitClick() {
    this.onSubmit(this.itemModel, this.firebaseCallback);
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
