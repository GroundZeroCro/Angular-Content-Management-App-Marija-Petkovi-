import {FirebaseService} from '../firebase.service';
import ItemContent from './ItemContent';
import {take} from 'rxjs/operators';

/**
 * Some of the components do not require firebaseService.
 */
class ItemContentFirebase extends ItemContent {

  constructor(private firebaseService: FirebaseService) {
    super();
  }

  onDeleteFirebaseItem(itemDocTitle: string) {
    console.log('Deleting firebase item');
    this.firebaseService.deleteItem(itemDocTitle).pipe(
      take(1)
    ).subscribe(value => console.log('Firebase item successfully deleted'));
  }
}

export default ItemContentFirebase;
