import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsEntity } from '@demo-app/data-models';
import { select, Store } from '@ngrx/store';
import { ProductsPartialState } from '../../+state/products.reducer';
import { getAllProducts } from '../../+state/products.selectors';
import { loadProducts } from '../../+state/products.actions';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'demo-app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductsEntity[]>;

  constructor(
    private store: Store<ProductsPartialState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(getAllProducts));
    this.store.dispatch(loadProducts());
  }

  updateUrlFilters(category: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { category },
    };

    this.router.navigate(['/products'], navigationExtras);
  }
}
