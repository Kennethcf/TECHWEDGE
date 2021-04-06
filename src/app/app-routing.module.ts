import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';



export const routes: Routes = [{path:'about',component:AboutComponent},{path:'product',component:ProductComponent},{path:'form',component:FormComponent},{path:'index',component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
