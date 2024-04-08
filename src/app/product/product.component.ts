import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CloudinaryImageComponent } from '../cloudinary-image/cloudinary-image.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CloudinaryImageComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product;
}
