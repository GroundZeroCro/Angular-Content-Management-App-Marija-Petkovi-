import {Component, Input} from '@angular/core';
import {FirebaseService} from '../../../../firebase.service';
import {MatSnackBar} from '@angular/material';
import {SegmentedModel} from '../../../segmented.model';

@Component({
  selector: 'app-edit-content-segment',
  templateUrl: './edit-content-segment.component.html',
  styleUrls: ['./edit-content-segment.component.sass']
})
export class EditContentSegmentComponent {

  @Input() itemModel: SegmentedModel;

  constructor(private firebaseService: FirebaseService, private snackBar: MatSnackBar) {
    this.itemModel = new SegmentedModel();
  }

  onSubmit() {
    // TODO update list
  }
}
