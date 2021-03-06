import { createAction, props } from '@ngrx/store';

import { ProductsEntity } from '@demo-app/data-models';

export const loadProducts = createAction('[Products Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: ProductsEntity[] }>()
);

export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: any }>()
);
