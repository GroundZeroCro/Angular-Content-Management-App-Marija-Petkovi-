import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListedContentComponent} from './listed-content/listed-content.component';
import {EditContentPrayerComponent} from './listed-content/item-content-prayer/edit-content/edit-content-prayer.component';
import {NewItemComponent} from './new-item/new-item.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthenticationGuard} from './authentication/authentication.guard';


const routes: Routes = [
  {path: '', component: ListedContentComponent, canActivate: [AuthenticationGuard]},
  {path: 'edit', component: EditContentPrayerComponent, canActivate: [AuthenticationGuard]},
  {path: 'new', component: NewItemComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
