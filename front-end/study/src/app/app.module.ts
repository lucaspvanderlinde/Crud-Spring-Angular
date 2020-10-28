import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './shared/components/product-create/product-create.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductUpdateComponent } from './shared/components/product-update/product-update.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
