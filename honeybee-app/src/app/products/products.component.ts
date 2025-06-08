import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/150' }
  ];
} 