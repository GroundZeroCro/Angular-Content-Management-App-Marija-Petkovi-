import {Component, Input} from '@angular/core';
import {ThoughtModel} from '../thought.model';
import {FirebaseService} from '../../firebase.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UUID} from 'angular2-uuid';
import {FirebaseCallback} from '../../firebase.callback';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';
import {FirebaseMedium} from '../../firebase.medium';

@Component({
  selector: 'app-edit-content-thought',
  templateUrl: './edit-content-thought.component.html',
  styleUrls: ['./edit-content-thought.component.sass']
})
export class EditContentThoughtComponent {

  @Input() itemModel: ThoughtModel;
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

  private initiateModel() {
    this.itemModel = new ThoughtModel();
  }

  onSubmit() {
    console.log('Submitting');
    this.firebaseMedium.onSubmit(this.itemModel, this.firebaseCallback);
  }
}
