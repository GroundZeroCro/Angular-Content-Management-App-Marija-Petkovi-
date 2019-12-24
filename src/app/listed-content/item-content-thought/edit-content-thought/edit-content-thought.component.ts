import {Component, Input} from '@angular/core';
import {ThoughtModel} from '../thought.model';
import {FirebaseService} from '../../firebase.service';

@Component({
  selector: 'app-edit-content-thought',
  templateUrl: './edit-content-thought.component.html',
  styleUrls: ['./edit-content-thought.component.sass']
})
export class EditContentThoughtComponent {

  @Input() itemModel: ThoughtModel;

  constructor(private firebaseService: FirebaseService) {
    this.itemModel = new ThoughtModel();
  }

  onSubmit() {
    this.firebaseService.updateItem(this.itemModel)
      .subscribe(value => console.log(value));
  }
}
