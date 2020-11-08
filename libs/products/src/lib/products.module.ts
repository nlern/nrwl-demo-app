import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@demo-app/material';

import { ProductsComponent } from './containers/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
