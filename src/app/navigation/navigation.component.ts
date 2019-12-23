import {Component, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment';
import {MatButtonToggleGroup} from '@angular/material';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  croatianKeyValue = environment.firebase_croatian_key_prefix;
  italianKeyValue = environment.firebase_italian_key_prefix;
  spanishKeyValue = environment.firebase_spanish_key_prefix;

  prayersKeyValue = environment.firebase_prayers_key_suffix;
  thoughtsKeyValue = environment.firebase_thoughts_key_suffix;

  @ViewChild('languageGroup', {static: false}) languageGroup: MatButtonToggleGroup;
  @ViewChild('typeGroup', {static: false}) typeGroup: MatButtonToggleGroup;

  constructor(private mainService: NavigationService) {
  }

  setContent() {
    console.log(this.languageGroup.value + this.typeGroup.value);
    this.mainService.listedContentSubject.next(this.languageGroup.value + this.typeGroup.value);
  }
}
