import {Component, Input} from '@angular/core';
import {ThoughtModel} from '../thought.model';
import {FirebaseService} from '../../firebase.service';
import {MatSnackBar} from '@angular/material';
import {successfulSubmitSnackbarMessage} from '../../../utils/constants';

@Component({
  selector: 'app-edit-content-thought',
  templateUrl: './edit-content-thought.component.html',
  styleUrls: ['./edit-content-thought.component.sass']
})
export class EditContentThoughtComponent {

  @Input() itemModel: ThoughtModel;

  constructor(private firebaseService: FirebaseService, private snackBar: MatSnackBar) {
    this.itemModel = new ThoughtModel();
  }

  onSubmit() {
    this.firebaseService.updateItem(this.itemModel)
      .subscribe(_ => {
        this.snackBar.open(successfulSubmitSnackbarMessage, 'Close', {
          duration: 2000,
        });
        this.itemModel = new ThoughtModel();
      });
  }
}
