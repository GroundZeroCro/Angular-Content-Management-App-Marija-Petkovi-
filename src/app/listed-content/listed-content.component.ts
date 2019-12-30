import {Component} from '@angular/core';
import {FirebaseService} from './firebase.service';
import {NavigationService} from '../navigation/navigation.service';
import {flatMap, map, take} from 'rxjs/operators';
import {PrayerModel} from './item-content-prayer/prayer.model';

@Component({
  selector: 'app-listed-content',
  templateUrl: './listed-content.component.html',
  styleUrls: ['./listed-content.component.sass']
})
export class ListedContentComponent {

  constructor(
    public firebaseService: FirebaseService,
    public navigationService: NavigationService
  ) {
    navigationService.currentListSize$ = firebaseService.data$.pipe(
      map(value => value.length)
    );

    this.firebaseService.collectioN().subscribe(value => value.map(value1 => {
      const key = value1.payload.doc.id;
      const item = value1.payload.doc.data() as PrayerModel;
      item.docKey = key;
      this.firebaseService.deleteItem(item.docKey).pipe(take(1)).subscribe();
      this.firebaseService.updateItem(item).pipe(take(1)).subscribe();
    }));
  }
}
