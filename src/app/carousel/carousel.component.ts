import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true, 
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent { 
  images: string[] = [
    'https://cdn.vakko.com/banners/71faca7a-6e85-4c83-b8f0-e69e3e549331.jpeg',
    'https://cdn.vakko.com/banners/cf19d781-0034-4a73-b3ec-d6758ed49b20.jpeg'
  ];

  currentIndex: number = 0;

  get transformStyle() {
    return `translateY(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}
