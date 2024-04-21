import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.from(".about-header", {
      opacity: 0,
      y: -10,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from(".about-section", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from(".skills-container .skill", {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      stagger: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-container",
        start: "30% bottom", 
        end: "bottom top", 
        toggleActions: "play none none none",
      }
    });

    gsap.from(".history-section", {
      opacity: 0,
      scale: 0.8,
      duration: 8,
      ease: "power2.out",
    });
  }
}
