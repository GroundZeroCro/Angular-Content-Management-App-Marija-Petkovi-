import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';
import { ListedContentComponent } from './main/listed-content/listed-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListedContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
