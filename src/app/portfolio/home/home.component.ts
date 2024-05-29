import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

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
    const tl = gsap.timeline();

    tl.to('.welcome-text', { opacity: 1, duration: 0.5 })
      .to('.welcome-text', { text: "Welcome to my portfolio", duration: 1, ease: 'power2.inOut' })
      .to('.welcome-text', { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 })
      .to('.black-screen', { opacity: 0, duration: 1 })
      .set('.black-screen', { display: 'none' });

    tl.from('.container', { opacity: 0, duration: 1 }, "-=0.5")
      .from('.photo', { opacity: 0, y: -30, rotation: -45, scale: 0.8, duration: 1.2, ease: 'back.out(1.7)' }, "-=0.5")
      .from('.text', { opacity: 0, x: 40, duration: 1 }, "-=0.5")
      .from('.card-container', {
        opacity: 0,
        y: 10,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out'
      }, "-=0.5");
  }
}
