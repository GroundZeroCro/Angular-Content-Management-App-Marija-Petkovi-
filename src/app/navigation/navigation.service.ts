import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LanguageType} from './language-type';
import {ItemType} from './item-type';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  listedContentSubject = new BehaviorSubject(LanguageType.CROATIAN + ItemType.PRAYERS);
}
