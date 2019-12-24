import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {NavigationService} from '../navigation/navigation.service';
import {flatMap, switchMap, take} from 'rxjs/operators';
import {ItemModel} from './item.model';
import {PrayerModel} from './item-content-prayer/prayer.model';
import {ThoughtModel} from './item-content-thought/thought.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // collectionKey is dynamically changed
  data$: Observable<ItemModel[]>;

  constructor(
    private firestore: AngularFirestore,
    private mainService: NavigationService
  ) {
    this.data$ = mainService.listedContentSubject.pipe(
      flatMap(collectionKey =>
        this.firestore.collection(collectionKey).valueChanges() as Observable<ItemModel[]>
      )
    );
  }

  updateItem(item: PrayerModel | ThoughtModel): Observable<void> {
    return this.mainService.listedContentSubject.pipe(
      take(1),
      switchMap(collectionKey => this.firestore.collection(collectionKey).doc(item.title).set(item))
    );
  }
}
