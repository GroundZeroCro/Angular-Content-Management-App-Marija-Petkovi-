import {ItemModel} from '../item.model';
import {SegmentedModel} from './segmented.model';

export class PrayerModel extends ItemModel {
  tag = '';
  type: number = 0;
  segmentedList: SegmentedModel[] = [];
}
