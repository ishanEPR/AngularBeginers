import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormAngularMaterialComponent } from './form-angular-material/form-angular-material.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  // {path:'',component: FormComponent},
  // {path:'profile',component:FormAngularMaterialComponent},
  // {path:'about', component: SecondComponentComponent}
  {path:'',component: HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
