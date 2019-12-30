import {Component, Input} from '@angular/core';
import {ThoughtModel} from '../thought.model';
import {FirebaseService} from '../../firebase.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FirebaseCallback} from '../../firebase.callback';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';
import {EditContentFirebase} from '../../shared/edit-content-firebase';

@Component({
  selector: 'app-edit-content-thought',
  templateUrl: './edit-content-thought.component.html',
  styleUrls: ['./edit-content-thought.component.sass']
})
export class EditContentThoughtComponent extends EditContentFirebase {

  @Input() itemModel: ThoughtModel;
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

  private initiateModel() {
    this.itemModel = new ThoughtModel();
  }

  onSubmitClick() {
    this.onSubmit(this.itemModel, this.firebaseCallback);
  }
}
