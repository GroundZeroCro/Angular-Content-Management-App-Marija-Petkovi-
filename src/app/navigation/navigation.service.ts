import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LanguageType} from './language-type';
import {ItemType} from './item-type';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  listedContentSubject = new BehaviorSubject(LanguageType.CROATIAN + ItemType.PRAYERS + environment.firebaseCollectionSuffix);
  currentListSize$ = new Observable<number>();
  searchedKeyword$ = new BehaviorSubject('');

  /**
   * @param listedContent staging and release collection key
   */
  setNewListedContent(listedContent: string) {
    this.listedContentSubject.next(listedContent + environment.firebaseCollectionSuffix);
  }
}
