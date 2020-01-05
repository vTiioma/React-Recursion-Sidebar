import LabelItem from './LabelItem.Interface';

export default interface Item extends LabelItem {
  subItems?: Item[];
}
