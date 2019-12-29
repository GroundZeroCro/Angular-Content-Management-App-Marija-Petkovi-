import {UUID} from 'angular2-uuid';

export class ItemModel {
  title = '';
  text = '';
  itemId = UUID.UUID();
}
