import { AfterViewInit, ChangeDetectionStrategy, Component, viewChild, DestroyRef, input, OnChanges, OnInit, OnDestroy, output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetail {
  product = input<Product>();
  added = output<Product>();

  addToCart() {
    this.added.emit(this.product()!);
  }
  
  get productTitle() {
    return this.product()!.title;
  }

  // constructor() {
  //   console.log('Product: ', this.product());
  // }
  
  // ngOnInit(): void {
  //   console.log('Product: ', this.product());
  // }

  // ngOnDestroy(): void {
  // }

  // constructor(destroyRef: DestroyRef) {
  //   destroyRef.onDestroy(()=> {
  //   });
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const product = changes['product'];
  //   if (!product.isFirstChange()) {
  //     const oldValue = product.previousValue;
  //     const newValue = product.currentValue;
  //     console.log('Old Value', oldValue);
  //     console.log('New Value', newValue);
  //   }
  // }

  // productDetail = viewChild(ProductDetail);
  // ngAfterViewInit(): void {
  //   console.log(this.productDetail()!.product())
  // }
}