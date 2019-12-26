import {Component, Input} from '@angular/core';
import ItemContent from '../../../shared/ItemContent';
import {SegmentedModel} from '../../segmented.model';

@Component({
  selector: 'app-item-content-segment',
  templateUrl: './item-content-segment.component.html',
  styleUrls: ['./item-content-segment.component.sass']
})
export class ItemContentSegmentComponent extends ItemContent {

  @Input() segmentedModel: SegmentedModel;

  constructor() {
    super();
    console.log(this.segmentedModel);
  }
}
