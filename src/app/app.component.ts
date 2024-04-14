import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { Product } from './interfaces/product';
import { ProductService } from './services-singleton/product.service';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    ProductComponent,
    CommonModule,
    CloudinaryModule,
    NavbarComponent
  ]
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;  
    });
  }
}