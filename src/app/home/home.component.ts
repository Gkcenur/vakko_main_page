import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule'ü import edin

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // CommonModule'ü buraya ekleyin
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProducts = [
    { name: 'Product 1', price: '€100', image: 'assets/product1.jpg' },
    { name: 'Product 2', price: '€200', image: 'assets/product2.jpg' },
    { name: 'Product 3', price: '€300', image: 'assets/product3.jpg' },
  ];
}
