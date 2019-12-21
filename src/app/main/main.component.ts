import { Component} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  croatianKeyValue = environment.firebase_croatian_key_prefix;
  italianKeyValue = environment.firebase_italian_key_prefix;
  spanishKeyValue = environment.firebase_spanish_key_prefix;

  prayersKeyValue = environment.firebase_prayers_key_suffix;
  thoughtsKeyValue = environment.firebase_thoughts_key_suffix;


}
