import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListedContentComponent} from './listed-content/listed-content.component';
import {EditContentPrayerComponent} from './listed-content/item-content-prayer/edit-content/edit-content-prayer.component';


const routes: Routes = [
  {path: '', component: ListedContentComponent},
  {path: 'edit', component: EditContentPrayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
