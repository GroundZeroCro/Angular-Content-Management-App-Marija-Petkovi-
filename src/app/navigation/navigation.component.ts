import {Component, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment';
import {MatButtonToggleGroup} from '@angular/material';
import {NavigationService} from './navigation.service';
import {ItemModel} from '../listed-content/item.model';
import {ItemType} from './item-type';
import {LanguageType} from './language-type';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  croatianKeyValue = LanguageType.CROATIAN;
  italianKeyValue = LanguageType.ITALIAN;
  spanishKeyValue = LanguageType.SPANISH;

  prayersKeyValue = ItemType.PRAYERS;
  thoughtsKeyValue = ItemType.THOUGHTS;

  @ViewChild('languageGroup', {static: false}) languageGroup: MatButtonToggleGroup;
  @ViewChild('typeGroup', {static: false}) typeGroup: MatButtonToggleGroup;

  constructor(private mainService: NavigationService) {
  }

  setContent() {
    console.log(this.languageGroup.value + this.typeGroup.value);
    this.mainService.listedContentSubject.next(this.languageGroup.value + this.typeGroup.value);
  }
}
