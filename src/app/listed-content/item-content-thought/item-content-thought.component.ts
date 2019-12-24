import {Component, Input} from '@angular/core';
import {ThoughtModel} from './thought.model';
import ItemContent from '../shared/ItemContent';

@Component({
  selector: 'app-item-content-thought',
  templateUrl: './item-content-thought.component.html',
  styleUrls: ['./item-content-thought.component.sass']
})
export class ItemContentThoughtComponent extends ItemContent {

  @Input() thoughtModel: ThoughtModel;
}
