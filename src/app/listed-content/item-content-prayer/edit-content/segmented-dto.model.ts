import {ItemModel} from '../../item.model';

export class SegmentedDto extends ItemModel {

  public textToSegmentedList(text: string): ItemModel[] {
    return JSON.parse(text);
  }

  public segmentedListToText(segmentedList: ItemModel[]): string {
    return JSON.stringify(segmentedList);
  }
}
