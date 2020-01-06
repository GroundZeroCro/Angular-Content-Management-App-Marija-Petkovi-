import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SegmentedModel} from '../../segmented.model';
import ItemContentFirebase from '../../../shared/item-content-firebase';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-item-content-segment',
  templateUrl: './item-content-segment.component.html',
  styleUrls: ['./item-content-segment.component.sass']
})
export class ItemContentSegmentComponent extends ItemContentFirebase {

  @Input() segmentedModel: SegmentedModel;
  @Output() removeSegmentedItemEvent = new EventEmitter();
  private readonly callback: DecisionDialogCallback;

  constructor(private matDialog: MatDialog) {
    super(matDialog);
    const fieldMemberHandle = this;

    this.callback = {
      onConfirmed() {
        fieldMemberHandle.removeSegmentedItemEvent.emit(fieldMemberHandle.segmentedModel);
      }
    };
  }

  updateSegmentedItem($event: SegmentedModel) {
    this.segmentedModel = $event;
    this.changeEditMode();
  }

  removeSegmentedItem() {
    this.onDelete(this.segmentedModel.title, this.callback);
  }
}
