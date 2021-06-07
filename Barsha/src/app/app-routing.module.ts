import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './pages/demo-form/demo-form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'demo-form' , component:DemoFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
