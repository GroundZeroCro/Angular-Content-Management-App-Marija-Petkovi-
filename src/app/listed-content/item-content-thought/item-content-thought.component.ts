import {Component, Input, OnInit} from '@angular/core';
import {PrayerModel} from '../item-content-prayer/prayer.model';
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

  constructor() {
  }

  changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
