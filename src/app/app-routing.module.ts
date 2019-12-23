import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListedContentComponent} from './listed-content/listed-content.component';
import {EditContentComponent} from './edit-content/edit-content.component';


const routes: Routes = [
  {path: '', component: ListedContentComponent},
  {path: 'edit', component: EditContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
