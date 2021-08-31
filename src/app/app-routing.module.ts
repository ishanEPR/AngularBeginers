import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAngularMaterialComponent } from './form-angular-material/form-angular-material.component';
import { FormComponent } from './form/form.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {path:'',component: FormComponent},
  {path:'page1',component:FormAngularMaterialComponent},
  {path:'page2', component: SecondComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
