import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsEntity } from '@demo-app/data-models';
import { select, Store } from '@ngrx/store';
import { ProductsPartialState } from '../../+state/products.reducer';
import { getAllProducts } from '../../+state/products.selectors';
import { loadProducts } from '../../+state/products.actions';

@Component({
  selector: 'demo-app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductsEntity[]>;

  constructor(private store: Store<ProductsPartialState>) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(getAllProducts));
    this.store.dispatch(loadProducts());
  }
}
