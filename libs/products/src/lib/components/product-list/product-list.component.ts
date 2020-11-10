import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ProductsEntity } from '@demo-app/data-models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() products: ProductsEntity[];
  @Output() filter = new EventEmitter<string>();

  OnFilter(category: string) {
    this.filter.emit(category);
  }
}
