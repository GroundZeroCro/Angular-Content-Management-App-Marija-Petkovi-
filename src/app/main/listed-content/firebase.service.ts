import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MainService} from '../main.service';
import {flatMap} from 'rxjs/operators';
import {ItemModel} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collection: AngularFirestoreCollection<ItemModel>;
  data$: Observable<ItemModel[]>;

  constructor(
    private firestore: AngularFirestore,
    private mainService: MainService
  ) {
    this.data$ = mainService.listedContentSubject.pipe(
      flatMap(value => this.firestore.collection(value !== '' ? value : 'hr-prayers').valueChanges() as Observable<ItemModel[]>)
    );
  }
}
