import {FirebaseService} from '../firebase.service';
import ItemContent from './item-content';
import {take} from 'rxjs/operators';
import {DecisionDialogComponent} from './decision-dialog/decision-dialog.component';
import {MatDialog} from '@angular/material';

/**
 * Some of the components do not require firebaseService.
 */
class ItemContentFirebase extends ItemContent {

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) {
    super();
  }

  onDelete(itemDocTitle: string) {
    const dialogRef = this.dialog.open(DecisionDialogComponent, {
      width: '300px',
      data: {
        title: 'Delete item',
        message: `Are you sure you want to delete existing item with title  ${itemDocTitle}`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.decision) {
        this.firebaseService.deleteItem(itemDocTitle).pipe(
          take(1)
        ).subscribe(value => console.log('Firebase item successfully deleted'));
      }
    });
  }
}

export default ItemContentFirebase;
