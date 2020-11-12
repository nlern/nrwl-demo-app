import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';

import * as ProductsActions from './products.actions';
import { ProductsService } from '../services/products/products.service';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { ProductsEntity } from '@demo-app/data-models';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  loadFilteredProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) =>
        r.payload.routerState.url.startsWith('/products')
      ),
      map(
        (r: RouterNavigationAction) =>
          r.payload.routerState.root.queryParams['category']
      ),
      mergeMap((category: string) =>
        this.productsService.getProducts(category).pipe(
          map((products: ProductsEntity[]) =>
            ProductsActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
