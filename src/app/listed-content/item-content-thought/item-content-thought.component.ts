import {Component, Input} from '@angular/core';
import {ThoughtModel} from './thought.model';
import {FirebaseService} from '../firebase.service';
import ItemContentFirebase from '../shared/item-content-firebase';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-item-content-thought',
  templateUrl: './item-content-thought.component.html',
  styleUrls: ['./item-content-thought.component.sass']
})
export class ItemContentThoughtComponent extends ItemContentFirebase {

  @Input() thoughtModel: ThoughtModel;

  constructor(firebaseService: FirebaseService, dialog: MatDialog) {
    super(firebaseService, dialog);
  }
}
