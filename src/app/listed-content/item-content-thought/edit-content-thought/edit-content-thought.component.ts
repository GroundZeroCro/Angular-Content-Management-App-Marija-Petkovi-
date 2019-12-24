import {Component, Input, OnInit} from '@angular/core';
import {PrayerModel} from '../../item-content-prayer/prayer.model';
import {ThoughtModel} from '../thought.model';
import {FirebaseService} from '../../firebase.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-edit-content-thought',
  templateUrl: './edit-content-thought.component.html',
  styleUrls: ['./edit-content-thought.component.sass']
})
export class EditContentThoughtComponent implements OnInit {

  @Input() itemModel: ThoughtModel;

  constructor(private firebaseService: FirebaseService) {
    this.itemModel = new ThoughtModel();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemModel);
    this.firebaseService.updateItem(this.itemModel).pipe(
      take(1)
    ).subscribe(value => console.log(value));
  }
}
