import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as ProductsActions from './products.actions';
import { ProductsService } from '../services/products/products.service';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      fetch({
        run: (action) => {
          return this.productsService
            .getProducts()
            .pipe(
              map((products) =>
                ProductsActions.loadProductsSuccess({ products })
              )
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
