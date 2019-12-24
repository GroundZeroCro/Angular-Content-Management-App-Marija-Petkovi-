import {Component, Input, OnInit} from '@angular/core';
import {PrayerModel} from '../../item-content-prayer/prayer.model';
import {ThoughtModel} from '../thought.model';

@Component({
  selector: 'app-edit-content-thought',
  templateUrl: './edit-content-thought.component.html',
  styleUrls: ['./edit-content-thought.component.sass']
})
export class EditContentThoughtComponent implements OnInit {

  @Input() itemModel: ThoughtModel;

  constructor() {
    this.itemModel = new ThoughtModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemModel);
  }
}
