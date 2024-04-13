import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isMenuOpen: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const menu = this.el.nativeElement.querySelector('.menu');
    const logoText = this.el.nativeElement.querySelector('.logo p');

    gsap.from(menu, { opacity: 0, x: 20, duration: 2, ease: 'power2.out' });

    const textContent = logoText.textContent.trim();
    logoText.textContent = '';

    const letters = textContent.split('');
    letters.forEach((letter: string, index: number) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      logoText.appendChild(span);

      gsap.to(span, { opacity: 1, duration: 0.5, delay: index * 0.08 });
    });
  }
  
}
