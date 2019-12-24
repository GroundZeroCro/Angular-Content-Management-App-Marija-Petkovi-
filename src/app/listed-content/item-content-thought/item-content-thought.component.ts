import {Component, Input} from '@angular/core';
import {ThoughtModel} from './thought.model';

@Component({
  selector: 'app-item-content-thought',
  templateUrl: './item-content-thought.component.html',
  styleUrls: ['./item-content-thought.component.sass']
})
export class ItemContentThoughtComponent {

  @Input() thoughtModel: ThoughtModel;

  panelOpenState = false;
  isEditMode = false;

  changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
