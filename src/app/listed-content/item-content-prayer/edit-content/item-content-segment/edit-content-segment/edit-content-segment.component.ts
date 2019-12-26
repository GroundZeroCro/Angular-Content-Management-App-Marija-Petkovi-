import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FirebaseService} from '../../../../firebase.service';
import {MatSnackBar} from '@angular/material';
import {SegmentedModel} from '../../../segmented.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-content-segment',
  templateUrl: './edit-content-segment.component.html',
  styleUrls: ['./edit-content-segment.component.sass']
})
export class EditContentSegmentComponent {

  @Input() itemModel: SegmentedModel;
  @Output() updateSegmentedItemEvent = new EventEmitter();
  @Output() removeSegmentedItemEvent = new EventEmitter();

  constructor(private firebaseService: FirebaseService, private snackBar: MatSnackBar) {
    this.itemModel = new SegmentedModel();
  }

  onUpdateSegmentedItem(segmentedForm: NgForm) {
    if (segmentedForm.valid) {
      this.updateSegmentedItemEvent.emit(this.itemModel);
    } else {
      console.log('Segmented form not valid');
    }
  }

  onRemoveSegmentedItem() {
    this.removeSegmentedItemEvent.emit(this.itemModel);
  }
}
