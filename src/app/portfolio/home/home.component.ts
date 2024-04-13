import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router, private el: ElementRef) {}

  goTo(route: string): void {
    this.router.navigate([route]);
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  ngAfterViewInit(): void {
    gsap.from('.container', { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.photo', { opacity: 0, y: -100, rotation: -45, scale: 0.5, duration: 1.2, ease: 'back.out(1.7)', delay: 0.7 });
    gsap.from('.text', { opacity: 0, x: 100, duration: 1, delay: 1 });
    gsap.from('.card-container', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      delay: 1.5
    });
  }
}
