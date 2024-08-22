import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from '../main/main.component'; // MainComponent doğru yolu kontrol edin
import { CarouselComponent } from './carousel/carousel.component'; // Import the CarouselComponent

@NgModule({
  declarations: [
    AppComponent,  // AppComponent burada listelenmeli
    MainComponent, // MainComponent burada listelenmeli
    CarouselComponent // Declare the CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
