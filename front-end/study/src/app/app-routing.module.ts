import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './shared/components/product-create/product-create.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductUpdateComponent } from './shared/components/product-update/product-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: ProductCreateComponent},
  { path: 'update/:id', component: ProductUpdateComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
