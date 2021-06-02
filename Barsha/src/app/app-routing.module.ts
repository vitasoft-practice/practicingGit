import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserItemComponent } from './pages/user-item/user-item.component';

const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'user-item' , component:UserItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
