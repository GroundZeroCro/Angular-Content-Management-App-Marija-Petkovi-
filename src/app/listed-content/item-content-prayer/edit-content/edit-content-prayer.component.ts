import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ItemModel} from '../../item.model';

@Component({
  selector: 'app-edit-content-prayer',
  templateUrl: './edit-content-prayer.component.html',
  styleUrls: ['./edit-content-prayer.component.sass']
})
export class EditContentPrayerComponent implements OnInit {

 @Input() itemModel: ItemModel

  constructor() {
   this.itemModel = new ItemModel()
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemModel);
  }
}
