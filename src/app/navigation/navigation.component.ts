import {Component, ViewChild} from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material';
import {NavigationService} from './navigation.service';
import {ItemType} from './item-type';
import {LanguageType} from './language-type';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  isSearchMode = false;

  croatianKeyValue = LanguageType.CROATIAN;
  italianKeyValue = LanguageType.ITALIAN;
  spanishKeyValue = LanguageType.SPANISH;

  prayersKeyValue = ItemType.PRAYERS;
  thoughtsKeyValue = ItemType.THOUGHTS;

  @ViewChild('languageGroup', {static: false}) languageGroup: MatButtonToggleGroup;
  @ViewChild('typeGroup', {static: false}) typeGroup: MatButtonToggleGroup;

  constructor(
    private mainService: NavigationService,
    public router: Router,
    public authenticationService: AuthenticationService
  ) {
  }

  setContent() {
    this.mainService.listedContentSubject.next(this.languageGroup.value + this.typeGroup.value);
  }

  switchSearchMode() {
    this.isSearchMode = !this.isSearchMode;
  }

  onSearchInput(inputString: string) {
    this.mainService.searchedKeyword$.next(inputString);
  }

  addNewItem() {

  }
}
