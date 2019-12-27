import {Component, Input} from '@angular/core';
import {ThoughtModel} from './thought.model';
import {FirebaseService} from '../firebase.service';
import ItemContentFirebase from '../shared/ItemContentFirebase';

@Component({
  selector: 'app-item-content-thought',
  templateUrl: './item-content-thought.component.html',
  styleUrls: ['./item-content-thought.component.sass']
})
export class ItemContentThoughtComponent extends ItemContentFirebase {

  @Input() thoughtModel: ThoughtModel;

  constructor(firebaseService: FirebaseService) {
    super(firebaseService);
  }
}
