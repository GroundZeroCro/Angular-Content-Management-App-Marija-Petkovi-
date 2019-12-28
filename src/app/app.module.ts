import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDialogModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListedContentComponent } from './listed-content/listed-content.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {firebaseConfig} from '../environments/enviroment-firebase';
import { NavigationComponent } from './navigation/navigation.component';
import {ItemContentPrayerComponent} from './listed-content/item-content-prayer/item-content-prayer.component';
import {EditContentPrayerComponent} from './listed-content/item-content-prayer/edit-content/edit-content-prayer.component';
import { ItemContentThoughtComponent } from './listed-content/item-content-thought/item-content-thought.component';
import { EditContentThoughtComponent } from './listed-content/item-content-thought/edit-content-thought/edit-content-thought.component';
import { TextShortenerPipe } from './pipes/text-shortener.pipe';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemContentSegmentComponent } from './listed-content/item-content-prayer/edit-content/item-content-segment/item-content-segment.component';
import { EditContentSegmentComponent } from './listed-content/item-content-prayer/edit-content/item-content-segment/edit-content-segment/edit-content-segment.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { DecisionDialogComponent } from './listed-content/shared/decision-dialog/decision-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListedContentComponent,
    NavigationComponent,
    ItemContentPrayerComponent,
    ItemContentThoughtComponent,
    EditContentPrayerComponent,
    EditContentThoughtComponent,
    TextShortenerPipe,
    NewItemComponent,
    ItemContentSegmentComponent,
    EditContentSegmentComponent,
    AuthenticationComponent,
    DecisionDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonToggleModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  entryComponents: [DecisionDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
