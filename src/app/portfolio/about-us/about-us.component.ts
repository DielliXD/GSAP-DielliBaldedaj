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
    this.animateIntro();
  }

  animateIntro(): void {
    gsap.from("#blackScreen", { 
      opacity: 0.9,
      duration: 1,
      delay: 0, 
    });

    gsap.from(".intro-text", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1
    });

    gsap.from(".about-header", {
      opacity: 0,
      y: -10,
      duration: 1.5,
      ease: "power2.out",
      delay: 4.5
    });

    gsap.from(".about-section", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 4.5
    });

    gsap.to("#blackScreen", { 
      opacity: 0, 
      duration: 0.5,
      delay: 4, 
      onComplete: () => {
        this.setupScrollAnimations(); 
        document.getElementById('blackScreen')?.remove();
      } 
    });
  }

  setupScrollAnimations(): void {
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
