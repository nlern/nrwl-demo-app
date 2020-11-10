import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsEntity } from '@demo-app/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductsEntity[]> {
    return this.httpClient.get<ProductsEntity[]>(
      'http://localhost:3000/products'
    );
  }
}
