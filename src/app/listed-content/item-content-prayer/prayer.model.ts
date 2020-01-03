import {ItemModel} from '../item.model';
import {SegmentedModel} from './segmented.model';

export class PrayerModel extends ItemModel {
  tag = '';
  type = 0;
  segmentedList: SegmentedModel[] = [];
  musicUrl = '';
}
