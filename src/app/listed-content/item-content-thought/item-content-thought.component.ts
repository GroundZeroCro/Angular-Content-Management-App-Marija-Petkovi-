import {Component, Input} from '@angular/core';
import {ThoughtModel} from './thought.model';
import {FirebaseService} from '../firebase.service';
import ItemContentFirebase from '../shared/item-content-firebase';
import {MatDialog} from '@angular/material';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-item-content-thought',
  templateUrl: './item-content-thought.component.html',
  styleUrls: ['./item-content-thought.component.sass']
})
export class ItemContentThoughtComponent extends ItemContentFirebase {

  @Input() thoughtModel: ThoughtModel;
  private readonly decisionDialogCallback: DecisionDialogCallback;

  constructor(firebaseService: FirebaseService, dialog: MatDialog) {
    super(dialog);
    const fieldMemberHandle = this;

    this.decisionDialogCallback = {
      onConfirmed() {
        firebaseService.deleteItem(fieldMemberHandle.thoughtModel).pipe(
          take(1)
        ).subscribe(value => console.log('Firebase item successfully deleted'));
      }
    };
  }

  onDeleteClick() {
    this.onDelete(this.thoughtModel.title, this.decisionDialogCallback);
  }
}
