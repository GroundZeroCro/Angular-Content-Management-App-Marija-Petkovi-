import {Component, Input} from '@angular/core';
import {PrayerModel} from './prayer.model';
import {FirebaseService} from '../firebase.service';
import ItemContentFirebase from '../shared/item-content-firebase';
import {MatDialog} from '@angular/material';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-item-content-prayer',
  templateUrl: './item-content-prayer.component.html',
  styleUrls: ['./item-content-prayer.component.sass']
})
export class ItemContentPrayerComponent extends ItemContentFirebase {

  @Input() prayerModel: PrayerModel;
  private readonly decisionDialogCallback: DecisionDialogCallback;

  constructor(firebaseService: FirebaseService, dialog: MatDialog) {
    super(dialog);
    const fieldMemberHandle = this;

    this.decisionDialogCallback = {
      onConfirmed() {
        firebaseService.deleteItem(fieldMemberHandle.prayerModel).pipe(
          take(1)
        ).subscribe(value => console.log('Firebase item successfully deleted'));
      }
    };
  }

  onDeleteClick() {
    this.onDelete(this.prayerModel.title, this.decisionDialogCallback);
  }
}
