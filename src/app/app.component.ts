import { Component, Renderer2, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Get menu element
    const menu = this.el.nativeElement.querySelector('.menu');

    // Toggle menu animation
    if (this.isMenuOpen) {
      // Scale the menu to its normal size
      gsap.to(menu, { duration: 0.3, scale: 1 });
    } else {
      // Scale the menu down to hide it
      gsap.to(menu, { duration: 0.3, scale: 0 });
    }
  }

}
