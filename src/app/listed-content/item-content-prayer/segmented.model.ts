import {UUID} from 'angular2-uuid';

export class SegmentedModel {
  title = '';
  text = '';
  itemId = '';

  constructor(title = '', text = '', itemId = UUID.UUID()) {
    this.title = title;
    this.text = text;
    this.itemId = itemId;
  }
}
