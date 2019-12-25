import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListedContentComponent} from './listed-content/listed-content.component';
import {EditContentPrayerComponent} from './listed-content/item-content-prayer/edit-content/edit-content-prayer.component';
import {NewItemComponent} from './new-item/new-item.component';


const routes: Routes = [
  {path: '', component: ListedContentComponent},
  {path: 'edit', component: EditContentPrayerComponent},
  {path: 'new', component: NewItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
