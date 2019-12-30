import {PrayerModel} from '../item-content-prayer/prayer.model';
import {ThoughtModel} from '../item-content-thought/thought.model';
import {FirebaseCallback} from '../firebase.callback';
import {map, take} from 'rxjs/operators';
import {DecisionDialogComponent} from './decision-dialog/decision-dialog.component';
import {FirebaseService} from '../firebase.service';
import {MatDialog} from '@angular/material';

export class EditContentFirebase {

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) {
  }

  onSubmit(itemModel: PrayerModel | ThoughtModel, firebaseCallback: FirebaseCallback) {
    this.firebaseService.doesItemExist(itemModel.title).pipe(
      take(1),
      map(value => {
        if (value != null) {
          const dialogRef = this.dialog.open(DecisionDialogComponent, {
            width: '300px',
            data: {
              title: 'Item exists',
              message: `Are you sure you want to overwrite existing item with title  ${itemModel.title}`
            }
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result.decision) {
              this.submitItem(itemModel, firebaseCallback);
            }
          });
        } else {
          this.submitItem(itemModel, firebaseCallback);
        }
      })
    ).subscribe();
  }

  private submitItem(itemModel: PrayerModel | ThoughtModel, firebaseCallback: FirebaseCallback) {
    this.firebaseService.updateItem(itemModel)
      .subscribe(_ => {
        firebaseCallback.onSuccess();
      });
  }
}
