import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-decision-dialog',
  templateUrl: './decision-dialog.component.html',
  styleUrls: ['./decision-dialog.component.sass']
})
export class DecisionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DecisionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  onConfirmClick(): void {
    this.dialogRef.close({decision: true});
  }

  onCancelClick(): void {
    this.dialogRef.close({decision: false});
  }
}
