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
    { id: 1, name: 'Honey – ¼ kg', price: 5.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Honey – ½ kg', price: 9.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Honey – 1 kg', price: 17.99, image: 'https://via.placeholder.com/150' }
  ];

  addToCart(product: any) {
    alert(`${product.name} added to cart`);
  }
} 
