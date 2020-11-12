import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsEntity } from '@demo-app/data-models';
import { select, Store } from '@ngrx/store';
import { ProductsPartialState } from '../../+state/products.reducer';
import { getAllProducts } from '../../+state/products.selectors';
import { loadProducts } from '../../+state/products.actions';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'demo-app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductsEntity[]>;
  selectedCategory$: Observable<string>;

  constructor(
    private store: Store<ProductsPartialState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(getAllProducts));
    this.selectedCategory$ = this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['category'])
    );
  }

  updateUrlFilters(category: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { category },
    };

    this.router.navigate(['/products'], navigationExtras);
  }
}
