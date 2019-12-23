import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ItemModel} from '../listed-content/item.model';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.sass']
})
export class EditContentComponent implements OnInit {

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
