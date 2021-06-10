import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestwatchComponent } from './testwatch.component';

const routes: Routes = [{ path: '', component: TestwatchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestwatchRoutingModule { }
