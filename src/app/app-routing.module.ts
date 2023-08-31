import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chess1Component } from './chess1/chess1.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home' , component:  Chess1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
