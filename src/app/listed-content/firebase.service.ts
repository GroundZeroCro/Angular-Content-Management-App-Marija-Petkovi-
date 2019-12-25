import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {combineLatest, Observable} from 'rxjs';
import {NavigationService} from '../navigation/navigation.service';
import {flatMap, map, switchMap, take} from 'rxjs/operators';
import {ItemModel} from './item.model';
import {PrayerModel} from './item-content-prayer/prayer.model';
import {ThoughtModel} from './item-content-thought/thought.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // collectionKey is dynamically changed
  data$: Observable<ItemModel[]>;
  filteredData$: Observable<ItemModel[]>;

  constructor(
    private firestore: AngularFirestore,
    private navigationService: NavigationService
  ) {
    this.data$ = navigationService.listedContentSubject.pipe(
      flatMap(collectionKey =>
        this.firestore.collection(collectionKey).valueChanges() as Observable<ItemModel[]>
      )
    );

    this.filteredData$ = combineLatest(this.data$, this.navigationService.searchedKeyword$).pipe(
      map(([data, term]) => data.filter(item => item.title.includes(term)))
    );
  }

  updateItem(item: PrayerModel | ThoughtModel): Observable<void> {
    return this.navigationService.listedContentSubject.pipe(
      take(1),
      switchMap(collectionKey => this.firestore.collection(collectionKey).doc(item.title).set(item))
    );
  }
}
