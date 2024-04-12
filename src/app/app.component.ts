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
   
    const menu = this.el.nativeElement.querySelector('.menu');
    if (this.isMenuOpen) {
      gsap.to(menu, { duration: 0.3, scale: 1 });
    } else {
      gsap.to(menu, { duration: 0.3, scale: 0 });
    }
  }

}
