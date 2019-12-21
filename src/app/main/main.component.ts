import {AfterContentChecked, Component, ViewChild} from '@angular/core';
import {environment} from '../../environments/environment';
import {MainService} from './main.service';
import {MatButtonToggleGroup} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements AfterContentChecked {

  croatianKeyValue = environment.firebase_croatian_key_prefix;
  italianKeyValue = environment.firebase_italian_key_prefix;
  spanishKeyValue = environment.firebase_spanish_key_prefix;

  prayersKeyValue = environment.firebase_prayers_key_suffix;
  thoughtsKeyValue = environment.firebase_thoughts_key_suffix;

  @ViewChild('languageGroup', {static: false}) languageGroup: MatButtonToggleGroup;
  @ViewChild('typeGroup', {static: false}) typeGroup: MatButtonToggleGroup;

  constructor(private mainService: MainService) {
  }

  setContent() {
    console.log(this.languageGroup.value + this.typeGroup.value);
    this.mainService.listedContentSubject.next(this.languageGroup.value + this.typeGroup.value);
  }

  ngAfterContentChecked(): void {
    this.mainService.listedContentSubject.next(this.croatianKeyValue + this.prayersKeyValue);
  }
}
