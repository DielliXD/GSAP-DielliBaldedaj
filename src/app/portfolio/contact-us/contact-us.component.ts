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
    const leftSide = this.el.nativeElement.querySelector('.left-side');
    const rightSide = this.el.nativeElement.querySelector('.right-side');
    const customEase = gsap.parseEase('rough({template: none.out, strength: 2, points: 50, taper: "none", randomize: true})');

    gsap.timeline()
      .from(leftSide, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power4.out'
      })
      .from(rightSide, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: 'power4.out'
      }, '-=1.2')
      .from('.details', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.5)'
      }, '-=1.2')
      .from('.input-box', {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.8')
      .from('.button', {
        opacity: 1,
        y: -20,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=0.5');
  }
  }

