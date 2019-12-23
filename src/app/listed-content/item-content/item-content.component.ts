import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../item.model';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.sass']
})
export class ItemContentComponent {

  @Input() itemModel: ItemModel;

  panelOpenState = false;
  isEditMode = false;

  constructor() {
  }

  setEditMode() {
    this.isEditMode = true;
  }
}
