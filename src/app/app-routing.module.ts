import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleModalsComponent } from './multiple-modals/multiple-modals.component';
import { OneModalComponent } from './one-modal/one-modal.component';

const routes: Routes = [
  {path: '', component: OneModalComponent},
  {path: 'multiple', component: MultipleModalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OneModalComponent, 
  MultipleModalsComponent]