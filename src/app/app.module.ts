import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatRadioModule, MatSelectModule,
  MatSidenavModule,
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
import { EditContentComponent } from './edit-content/edit-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ListedContentComponent,
    NavigationComponent,
    EditContentComponent
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
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
