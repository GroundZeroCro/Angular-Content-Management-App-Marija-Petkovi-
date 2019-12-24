import {Component, Input} from '@angular/core';
import {PrayerModel} from './prayer.model';
import ItemContent from '../shared/ItemContent';

@Component({
  selector: 'app-item-content-prayer',
  templateUrl: './item-content-prayer.component.html',
  styleUrls: ['./item-content-prayer.component.sass']
})
export class ItemContentPrayerComponent extends ItemContent {

  @Input() prayerModel: PrayerModel;
}
