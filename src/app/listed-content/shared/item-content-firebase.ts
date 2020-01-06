import ItemContent from './item-content';
import {DecisionDialogComponent} from './decision-dialog/decision-dialog.component';
import {MatDialog} from '@angular/material';

/**
 * Some of the components do not require firebaseService.
 */
class ItemContentFirebase extends ItemContent {

  constructor(private dialog: MatDialog) {
    super();
  }

  onDelete(title: string, decisionDialogCallback: DecisionDialogCallback) {
    const dialogRef = this.dialog.open(DecisionDialogComponent, {
      width: '300px',
      data: {
        title: 'Delete item',
        message: `Are you sure you want to delete existing item with title  ${title}`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.decision) {
        decisionDialogCallback.onConfirmed();
      }
    });
  }
}

export default ItemContentFirebase;
