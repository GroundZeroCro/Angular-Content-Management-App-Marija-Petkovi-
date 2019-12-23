import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListedContentComponent} from './listed-content/listed-content.component';


const routes: Routes = [
  {path: '', component: ListedContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
