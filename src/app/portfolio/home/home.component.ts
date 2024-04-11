import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Run GSAP animation when the component is initialized
    gsap.from('.container', { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.photo', { opacity: 0, y: -100, rotation: -45, scale: 0.5, duration: 1.2, ease: 'back.out(1.7)', delay: 0.7 });
    gsap.from('.text', { opacity: 0, x: 100, duration: 1, delay: 1 });
  }

}