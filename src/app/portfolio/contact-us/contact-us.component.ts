import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.animateBlackScreenAndContent();
  }

  animateBlackScreenAndContent(): void {
    const leftSide = this.el.nativeElement.querySelector('.left-side');
    const rightSide = this.el.nativeElement.querySelector('.right-side');

    gsap.timeline()
      .from("#blackScreen", {
        opacity: 1,
        duration: 1
      })
      .to("#blackScreen", {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: () => {
          document.getElementById('blackScreen')?.remove();
        }
      })
      .from(leftSide, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.5')
      .from(rightSide, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.8')
      .from('.details', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.5)'
      }, '-=0.8')
      .from('.input-box', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.6')
      .from('.button', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power4.out'
      }, '-=0.4');
  }
}
