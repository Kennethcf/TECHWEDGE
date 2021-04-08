import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';




export const routes: Routes = [{path:'about',component:AboutComponent},{path:'product',component:ProductComponent},{path:'form',component:FormComponent},{path:'index',component:AboutComponent},{path:'product/form',component:FormComponent},{path:'admin',component:AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
